import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { io, Socket } from "socket.io-client";
import Room from "../components/Room/Room";
import { roomInfoAtom, userAtom, userInfoAtom } from "../states/main";
import { userInfoType } from "../lib/types/userInfo";
import { getLocalStream } from "../lib/utils/getLocalStream";

export type setVideoTracksArgs = {
  pc: RTCPeerConnection;
  socket: Socket;
};

const pc_config = {
  iceServers: [
    // {
    //   urls: 'stun:[STUN_IP]:[PORT]',
    //   'credentials': '[YOR CREDENTIALS]',
    //   'username': '[USERNAME]'
    // },
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};
const SOCKET_SERVER_URL = "http://localhost:4000";
const test = { onicecandidate: 0, setVideoTrack: 0 };

const RoomContainer = () => {
  const roomInfo = useRecoilValue(roomInfoAtom);
  const [userInfo, setUserInfo] = useRecoilState<userInfoType[]>(userInfoAtom);
  const user = useRecoilValue(userAtom);
  const [myInfo, setMyInfo] = useState<userInfoType>();
  const pcsRef = useRef<{ [socketId: string]: RTCPeerConnection }>({});
  const socketRef = useRef<Socket>();
  const localStreamRef = useRef<MediaStream>();

  //local stream정보 가져오고, RTCPeerConnection에 스트림 트랙 저장
  const createPeerConnection = (
    socketID: string,
    nickname: string
  ): RTCPeerConnection | undefined => {
    try {
      console.log("createPeer");
      const pc = new RTCPeerConnection(pc_config);

      pc.onicecandidate = (e) => {
        if (!(socketRef.current && e.candidate)) return;
        // console.log(socketRef.current.id, socketID);
        socketRef.current.emit("candidate", {
          candidate: e.candidate,
          candidateSendID: socketRef.current.id,
          candidateReceiveID: socketID,
        });
      };

      pc.oniceconnectionstatechange = (e) => {
        console.log(e);
      };

      pc.ontrack = (e) => {
        console.log("ontrack success@@@@@@@@@");
        console.log(e.streams[0]);
        setUserInfo((oldUsers) =>
          oldUsers
            .filter((user) => user.id !== socketID)
            .concat({
              id: socketID,
              nickname,
              stream: e.streams[0],
            })
        );
      };

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => {
          if (!localStreamRef.current) return;
          pc.addTrack(track, localStreamRef.current);
        });
      } else {
        console.log("no local stream");
      }

      return pc;
    } catch (e) {
      console.error(e);
    }
  };

  const setVideoTracks = async () => {
    console.log("setVideoTracks message ", ++test.setVideoTrack);
    const stream: any = await getLocalStream();
    localStreamRef.current = stream;
    // const nickname = userInfo.filter((hel))
    const nickname = user;

    // setMyInfo({
    //   id: socketRef.current!.id,
    //   nickname,
    //   stream,
    // })
    setMyInfo({
      id: socketRef.current!.id,
      nickname,
      stream,
    });
    socketRef.current!.emit("join_room", {
      room: roomInfo.roomId,
      nickname,
    });
  };

  const createOffer = async (
    id: string,
    nickname: string,
    pc: RTCPeerConnection
  ) => {
    console.log("create offer");
    if (!(pc && socketRef.current)) {
      return;
    }
    try {
      const localSdp = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      });

      await pc.setLocalDescription(new RTCSessionDescription(localSdp));
      socketRef.current.emit("offer", { sdp: localSdp, id, nickname });
    } catch (e) {
      console.log("alluser Error");
      console.error(e);
    }
  };

  const createAnswer = async (
    sdp: RTCSessionDescription,
    id: string,
    pc: RTCPeerConnection
  ) => {
    if (!(pcsRef.current[id] && socketRef.current)) return;
    try {
      //새로운 커넷션을 생성 후에 remote로 저장
      await pc.setRemoteDescription(new RTCSessionDescription(sdp));
      console.log("answer set remote description success");
      const mySdp = await pc.createAnswer({
        offerToReceiveVideo: true,
        offerToReceiveAudio: true,
      });
      console.log("create answer");
      await pc.setLocalDescription(new RTCSessionDescription(mySdp));
      socketRef.current.emit("answer", { sdp: mySdp, id });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
    });
    setVideoTracks();
    socketRef.current.on(
      "all_users",
      async (
        allUsers: Array<{ id: string; nickname: string }>,
        sender: { id: string; nickname: string }
      ) => {
        if (allUsers.length <= 0) {
          return;
        }
        const { id: sendId, nickname: senderNickname } = sender;

        const pc = createPeerConnection(sendId, senderNickname);
        pcsRef.current = { ...pcsRef.current, [sendId]: pc! };
        if (!pc) return;
        await createOffer(sendId, user, pc);
      }
    );

    socketRef.current.on("getOffer", async ({ sdp, id: sendId, nickname }) => {
      console.log("get offer / socket : ", nickname);

      const pc = createPeerConnection(sendId, nickname);
      pcsRef.current = { ...pcsRef.current, [sendId]: pc! };

      if (!pc) return;
      await createAnswer(sdp, sendId, pc);
    });

    socketRef.current.on("getAnswer", ({ sdp, id }) => {
      console.log("get answer");
      const pc: RTCPeerConnection = pcsRef.current[id];
      if (!pc) {
        console.error("비정상 커넥트");
        return;
      }
      console.log("get answer After final session connect!!");
      pc.setRemoteDescription(new RTCSessionDescription(sdp));
    });

    socketRef.current.on(
      "getCandidate",
      async ({
        candidate,
        candidateSendID,
      }: {
        candidate: RTCIceCandidateInit;
        candidateSendID: string;
      }) => {
        console.log("get Candidate");
        const pc: RTCPeerConnection = pcsRef.current[candidateSendID];
        if (!pc) return;
        await pc.addIceCandidate(candidate);

        console.log("candidate add success");
      }
    );

    socketRef.current.on("user_exit", (data: { id: string }) => {
      if (!pcsRef.current[data.id]) return;
      pcsRef.current[data.id].close();
      delete pcsRef.current[data.id];
      setUserInfo((oldUsers) => oldUsers.filter((user) => user.id !== data.id));
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      userInfo.forEach((user) => {
        if (!pcsRef.current[user.id]) return;
        pcsRef.current[user.id].close();
        delete pcsRef.current[user.id];
      });
      if (pcsRef.current.id) {
        pcsRef.current.id.close();
      }
    };
  }, []);

  if (!myInfo) {
    return null;
  }

  return <Room roomInfo={roomInfo} userInfo={userInfo} myInfo={myInfo} />;
};

export default RoomContainer;

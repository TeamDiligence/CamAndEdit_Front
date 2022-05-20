import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { BsCameraVideoOff, BsCameraVideo } from "react-icons/bs";
export interface UserCamProps {
  nickname: string;
  stream: MediaStream;
  test: boolean;
}

const UserCam = ({ nickname, stream, test }: UserCamProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isCamera, setIsCamera] = useState<boolean>(true);
  useEffect(() => {
    if (videoRef.current) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = isMuted;
      });
      stream.getVideoTracks().forEach((track) => {
        track.enabled = isCamera;
      });
      videoRef.current.srcObject = stream;
    }
  }, []);

  const onHandleMute = () => {
    setIsMuted(!isMuted);
  };
  const onHandleVideoOff = () => {
    setIsCamera(!isCamera);
  };

  useEffect(() => {
    if (videoRef.current) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = isMuted;
      });
      stream.getVideoTracks().forEach((track) => {
        track.enabled = isCamera;
      });
      videoRef.current.srcObject = stream;
    }
  }, [isMuted, isCamera]);

  return (
    <UserCamLayout>
      <video
        ref={videoRef}
        // muted={isMuted}
        autoPlay
        style={{
          width: 200,
          height: 200,
          margin: 1,
          backgroundColor: "black",
        }}
      />
      <div>
        {test || (
          <div
            style={{
              cursor: "pointer",
              display: "inline-block",
              marginRight: "20px",
            }}
            onClick={onHandleMute}>
            {isMuted ? <VscUnmute /> : <VscMute />}
          </div>
        )}
        {test || (
          <div
            style={{ cursor: "pointer", display: "inline-block" }}
            onClick={onHandleVideoOff}>
            {isCamera ? <BsCameraVideo /> : <BsCameraVideoOff />}
          </div>
        )}
      </div>
      <NickName>{nickname}</NickName>
    </UserCamLayout>
  );
};

export default UserCam;

const UserCamLayout = styled.div`
  height: 100%;
  position: relative;
  background-color: white;
`;

const NickName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

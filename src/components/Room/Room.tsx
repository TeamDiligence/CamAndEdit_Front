import styled from "@emotion/styled";
import React from "react";
import { roomInfoType } from "../../lib/types/roomInfo";
import { userInfoType } from "../../lib/types/userInfo";
import UserCam from "./UserCam";

export interface RoomProps {
  roomInfo: roomInfoType;
  userInfo: userInfoType[];
  myInfo: any;
}

const Room = ({ roomInfo, userInfo, myInfo }: RoomProps) => {
  const { nickname, stream: myStream } = myInfo;

  return (
    <RoomLayout>
      <NavBar />
      <BoardLayout>
        <Editlayout />
        <DocsViewLayout />
      </BoardLayout>
      <CamLayout>
        <UserCam nickname={nickname} stream={myStream} test={false} />
        {userInfo.map((user) => (
          <UserCam nickname={user.nickname} stream={user.stream!} test={true} />
        ))}
      </CamLayout>
    </RoomLayout>
  );
};

export default Room;

const RoomLayout = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #6a6a6a;
`;
const BoardLayout = styled.div`
  background-color: #b5b5b5;
  flex: 1;
`;
const Editlayout = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fbfbfb;
`;
const DocsViewLayout = styled.div`
  width: 30%;
  height: 100%;
`;

const CamLayout = styled.div`
  width: 100%;
  height: 30%;
  background-color: #e0e0e0;
  display: flex;
  padding: 1rem 0rem 1rem 1rem;
  box-sizing: border-box;
  & > div {
    margin-right: 1rem;
  }
  overflow-y: scroll;
`;

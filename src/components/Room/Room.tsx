import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { roomInfoType } from "../../types/roomInfo";
import UserCam from "../UserCam/UserCam";

export interface RoomProps {
  roomInfo: roomInfoType;
}

const Room = ({ roomInfo }: RoomProps) => {
  const userList = ["a", "b", "c"];

  return (
    <RoomLayout>
      <NavBar />
      <BoardLayout>
        <Editlayout />
        <DocsViewLayout />
      </BoardLayout>
      <CamLayout>
        {userList.map((user) => (
          <UserCam nickName={user}></UserCam>
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

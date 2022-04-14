import React, { ChangeEvent, ReactEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Main from "../components/Main/Main";
import { roomInfoAtom, userInfoAtom } from "../states/main";
export interface enterRoomType {
  roomName: string;
  nickName: string;
}

const enterRoomState: enterRoomType = {
  roomName: "",
  nickName: "",
};

const MainContainer = () => {
  const navigator = useNavigate();
  const [enterRoomInfo, setEnterRoomInfo] =
    useState<enterRoomType>(enterRoomState);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [roomInfo, setRoomInfo] = useRecoilState(roomInfoAtom);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log(e.currentTarget);
    const { id, value } = e.currentTarget;
    setEnterRoomInfo({
      ...enterRoomInfo,
      [id]: value,
    });
  };

  const onEnterRoom = async () => {
    await (async () => {
      setUserInfo({
        nickName: enterRoomInfo.nickName,
      });
      setRoomInfo({
        ...roomInfo,
        roomName: enterRoomInfo.roomName,
      });
    })();
    await (async () => {
      navigator(`/room/${enterRoomInfo.roomName}`);
    })();
  };

  return (
    <Main
      handleInput={handleInput}
      onEnterRoom={onEnterRoom}
      enterRoomInfo={enterRoomInfo}
    />
  );
};

export default MainContainer;

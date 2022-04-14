import React, { ChangeEvent, useState } from "react";
import { enterRoomType } from "../../containers/MainContainer";

export interface MainProps {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnterRoom: () => void;
  enterRoomInfo: enterRoomType;
}

const Main = ({ handleInput, onEnterRoom, enterRoomInfo }: MainProps) => {
  return (
    <div>
      <input
        id="roomName"
        value={enterRoomInfo.roomName}
        onChange={(e) => handleInput(e)}
        placeholder="방이름"
      />
      <input
        id="nickname"
        value={enterRoomInfo.nickname}
        onChange={(e) => handleInput(e)}
        placeholder="닉네임이름"
      />
      <button onClick={() => onEnterRoom()}>방입장</button>
    </div>
  );
};

export default Main;

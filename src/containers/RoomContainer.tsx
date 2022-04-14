import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Room from "../components/Room/Room";
import { roomInfoAtom } from "../states/main";

const RoomContainer = () => {
  const roomInfo = useRecoilValue(roomInfoAtom);
  useEffect(() => {
    console.log(roomInfo);
  });
  return <Room roomInfo={roomInfo} />;
};

export default RoomContainer;

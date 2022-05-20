import React from "react";
import { useRecoilValue } from "recoil";
import MeetingRoom from "../components/MeetingRoom/MeetingRoom";
import { meetingRoomStateAtom } from "../states/workspace";

const MeetingRoomContainer = () => {
  const meetingRoomState = useRecoilValue<boolean>(meetingRoomStateAtom);
  return <MeetingRoom meetingRoomState={meetingRoomState} />;
};

export default MeetingRoomContainer;

import React from "react";
import ResizableTab from "../common/ResizableTab/ResizeableTab";
import * as S from "./style";
export interface MeetingRoomProps {
  meetingRoomState: boolean;
}

const MeetingRoom = ({ meetingRoomState }: MeetingRoomProps) => {
  return meetingRoomState ? (
    <ResizableTab position="left">
      <S.Wrapper>
        <S.Content>
          <S.Title></S.Title>
        </S.Content>
      </S.Wrapper>
    </ResizableTab>
  ) : null;
};

export default MeetingRoom;

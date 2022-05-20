import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import * as icons from "../../lib/asset/svg";
import { ICON_SMALL_SIZE } from "../../lib/styles/size";
import { camListStateAtom, meetingRoomStateAtom } from "../../states/workspace";
import CustomIcon from "../common/CustomIcon";

const WorkSpaceNavBar: React.FC<any> = () => {
  const [meetingRoomState, setMeetingRoomState] =
    useRecoilState<boolean>(meetingRoomStateAtom);
  const [camListState, setCamListState] =
    useRecoilState<boolean>(camListStateAtom);
  const onHandleMeetingRoom = () => {
    setMeetingRoomState(!meetingRoomState);
  };
  const onHandleCamList = () => {
    setCamListState(!camListState);
  };

  return (
    <>
      <CustomIcon
        icon={icons.ListIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={onHandleMeetingRoom}
      />
      <CustomIcon
        icon={icons.GroupIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={onHandleCamList}
      />
      <Middle>
        <CustomIcon icon={icons.AddDocsIconSvg} width={ICON_SMALL_SIZE} />
        <CustomIcon icon={icons.AddCanvasIconSvg} width={ICON_SMALL_SIZE} />
      </Middle>
      <OverSizeIconStyle>
        <div
          style={{
            width: "100px",
            backgroundColor: "#769dff",
            borderRadius: "4px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px",
            boxSizing: "border-box",
          }}>
          hellllo
        </div>
      </OverSizeIconStyle>
      <CustomIcon icon={icons.LogoutIconSvg} width={ICON_SMALL_SIZE} />
    </>
  );
};

export default WorkSpaceNavBar;

const Middle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  grid-column: 3;
  & > div {
    margin-left: 10px;
  }
`;

const OverSizeIconStyle = styled.div`
  width: 100%;
  & > div {
    transform: translateX(calc(-100% + 40px));
  }
`;

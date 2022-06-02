import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import * as icons from "../../lib/asset/svg";
import { ICON_SMALL_SIZE } from "../../lib/styles/size";
import {
  camListStateAtom,
  inviteModalStateAtom,
  meetingRoomStateAtom,
} from "../../states/workspace";
import CustomIcon from "../common/CustomIcon";

const WorkSpaceNavBar: React.FC<any> = () => {
  const [meetingRoomState, setMeetingRoomState] =
    useRecoilState<boolean>(meetingRoomStateAtom);
  const [camListState, setCamListState] =
    useRecoilState<boolean>(camListStateAtom);
  const [inviteModalState, setInviteModalState] =
    useRecoilState<boolean>(inviteModalStateAtom);
  const handleMeetingRoom = () => {
    setMeetingRoomState(!meetingRoomState);
  };
  const handleCamList = () => {
    setCamListState(!camListState);
  };

  const handleInviteButton = () => {
    setInviteModalState(!inviteModalState);
  };

  return (
    <>
      <CustomIcon
        icon={icons.ListIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={handleMeetingRoom}
      />
      <CustomIcon
        icon={icons.GroupIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={handleCamList}
      />
      <Middle>
        <CustomIcon icon={icons.AddDocsIconSvg} width={ICON_SMALL_SIZE} />
        <CustomIcon icon={icons.AddCanvasIconSvg} width={ICON_SMALL_SIZE} />
      </Middle>
      <OverSizeIconStyle>
        <div onClick={handleInviteButton}>invite</div>
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
  & > div {
    width: calc(100% + 40px);
    flex: 1;
    background-color: #769dff;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 20px;
    box-sizing: border-box;
    transform: translateX(calc(-100% + 40px));
    font-size: 1.2 rem;
    font-weight: 500;
    &:hover {
      background-color: #4a7bf6;
      transition: ease 0.2s;
    }
    &:active {
      background-color: #bfd0fa;
    }
  }
`;

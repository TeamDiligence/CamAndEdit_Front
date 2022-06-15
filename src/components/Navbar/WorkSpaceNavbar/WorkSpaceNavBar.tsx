import React from "react";
import { useRecoilState } from "recoil";
import * as icons from "../../../lib/asset/svg";
import { ICON_SMALL_SIZE } from "../../../lib/styles/size";
import { logout } from "../../../lib/utils/loginCheck";
import {
  camListStateAtom,
  inviteModalStateAtom,
  meetingRoomStateAtom,
} from "../../../states/workspace";
import CustomIcon from "../../common/CustomIcon/CustomIcon";
import * as S from "./style";

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
      <S.Middle>
        <CustomIcon icon={icons.AddDocsIconSvg} width={ICON_SMALL_SIZE} />
        <CustomIcon icon={icons.AddCanvasIconSvg} width={ICON_SMALL_SIZE} />
      </S.Middle>
      <S.OverSizeIconStyle>
        <div onClick={handleInviteButton}>invite</div>
      </S.OverSizeIconStyle>
      <CustomIcon
        icon={icons.LogoutIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={() => {
          logout();
        }}
      />
    </>
  );
};

export default WorkSpaceNavBar;

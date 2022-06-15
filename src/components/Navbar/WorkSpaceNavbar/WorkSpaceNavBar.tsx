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
import Icon from "../../common/Custom/Icon";
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
      <Icon
        icon={icons.ListIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={handleMeetingRoom}
      />
      <Icon
        icon={icons.GroupIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={handleCamList}
      />
      <S.Middle>
        <Icon icon={icons.AddDocsIconSvg} width={ICON_SMALL_SIZE} />
        <Icon icon={icons.AddCanvasIconSvg} width={ICON_SMALL_SIZE} />
      </S.Middle>
      <S.OverSizeIconStyle>
        <div onClick={handleInviteButton}>invite</div>
      </S.OverSizeIconStyle>
      <Icon
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

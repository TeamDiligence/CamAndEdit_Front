import React from "react";
import { useRecoilState } from "recoil";
import * as icons from "../../../lib/asset/svg";
import { ICON_MIDDLE_SIZE, ICON_SMALL_SIZE } from "../../../lib/styles/size";
import { logout } from "../../../lib/utils/loginCheck";
import {
  createWorkSpaceModalStateAtom,
  profileModalStateAtom,
} from "../../../states/main";
import Icon from "../../common/Custom/Icon";
import * as S from "./style";

const MainNavBar: React.FC<any> = () => {
  const [createWorkSpaceModalState, setCreateWorkSpaceModalState] =
    useRecoilState<boolean>(createWorkSpaceModalStateAtom);
  const [profileModalState, setProfileModalState] = useRecoilState<boolean>(
    profileModalStateAtom
  );

  return (
    <>
      <S.Middle>
        <Icon
          icon={icons.PlusIcon}
          height={ICON_MIDDLE_SIZE}
          onClick={() => {
            // console.log(createWorkSpaceModalState);
            setCreateWorkSpaceModalState(!createWorkSpaceModalState);
          }}
        />
      </S.Middle>
      <Icon
        icon={icons.ProfileIconSvg}
        height={ICON_SMALL_SIZE}
        gridColumn="4"
        onClick={() => {
          // console.log(profileModalState);
          setProfileModalState(!profileModalState);
        }}
      />

      <Icon
        icon={icons.LogoutIconSvg}
        size={ICON_SMALL_SIZE}
        gridColumn="5/5"
        onClick={() => {
          logout();
        }}
      />
    </>
  );
};
export default MainNavBar;

import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { EditValue } from "../../../../containers/ProfileModalCotainer";
import { ModifyIcon } from "../../../../lib/asset/svg";
import { User } from "../../../../lib/types/user";
import { profileModalStateAtom } from "../../../../states/main";
import Icon from "../../Custom/Icon";
import * as S from "./style";
import * as C from "./contain";

type ProfileModalProps = {
  user: User;
  handleSubmit: (EditValue: EditValue) => void;
};

const ProfileModal: React.FC<ProfileModalProps> = ({ user, handleSubmit }) => {
  const [profileModalState, setProfileModalState] = useRecoilState(
    profileModalStateAtom
  );
  // console.log(user);
  const [editModeState, setEditModeState] = useState<boolean>(false);
  const { name, description, image = S.dummyimage, email } = user;
  const onHandleState = () => {
    setEditModeState(!editModeState);
    setProfileModalState(!profileModalState);
  };
  const onHandlePropgation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };
  const onHandleEditState = () => {
    setEditModeState(!editModeState);
  };

  return (
    <S.Background onClick={onHandleState} modalState={profileModalState}>
      <S.Content onClick={onHandlePropgation} modalState={profileModalState}>
        <S.TopBar>
          <Icon icon={ModifyIcon} size={25} onClick={onHandleEditState} />
        </S.TopBar>
        <S.Profile>
          <img
            src={image!}
            alt="profile"
            width="100%"
            style={{ borderRadius: "50%" }}
          />
          <S.Name>{name}</S.Name>
        </S.Profile>
        <S.Description>{description || "설명이 아직 없습니다"}</S.Description>
        <S.Email>{email}</S.Email>
      </S.Content>
      <C.EditContent
        modalState={editModeState}
        setModalState={setEditModeState}
        handleSubmit={handleSubmit}
        name={name}
        description={description}
      />
    </S.Background>
  );
};

export default ProfileModal;

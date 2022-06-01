import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { profileModalStateAtom } from "../../../states/main";

type ModalProps = {};

const ProfileModal: React.FC<ModalProps> = ({}) => {
  const [profileModalState, setProfileModalState] = useRecoilState(
    profileModalStateAtom
  );
  const onHandleState = () => {
    setProfileModalState(!profileModalState);
  };
  const onHandlePropgation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Background onClick={onHandleState} modalState={profileModalState}>
      <Content onClick={onHandlePropgation}>
        <TopBar></TopBar>
        <ProfileImg></ProfileImg>
        <Description>안녕하십니가?</Description>
        <Email></Email>
      </Content>
    </Background>
  );
};

export default ProfileModal;

const Background = styled("div")`
  /* z-index: 4; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: end;
  align-items: center;
  display: ${({ modalState }: { modalState: boolean }) =>
    modalState ? "flex" : "none"};
`;

const Content = styled.div`
  z-index: 6;
  position: absolute;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  width: 40vw;
  /* border: 1px solid #000000; */
  overflow: hidden;
  background-color: #ffffff;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: gray;
`;
const ProfileImg = styled.div`
  border-radius: 24px;
  width: 100%;
  height: 50%;
  margin-top: 3rem;
  background-color: #00000033;
`;

const Description = styled.div`
  margin-top: 3rem;
`;

const Email = styled.div`
  margin-top: auto;
  background-color: blue;
  width: 100%;
  height: 1rem;
`;

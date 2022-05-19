import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { createWorkSpaceStateAtom } from "../../../states/main";
import Modal from "./Modal";
export interface CreateWorkSpaceModalProps {}

const CreateWorkSpaceModal = ({}: CreateWorkSpaceModalProps) => {
  const [createWorkSpaceState, setCreateWorkSpaceModalState] =
    useRecoilState<boolean>(createWorkSpaceStateAtom);
  const onHandleState = () => {
    setCreateWorkSpaceModalState(!createWorkSpaceState);
  };
  return (
    <Modal state={createWorkSpaceState} onHandleState={onHandleState}>
      <Wrapper>
        <TitleInput />
      </Wrapper>
    </Modal>
  );
};

export default CreateWorkSpaceModal;

const Wrapper = styled.div`
  width: 50vw;
  height: 50vh;
`;

const TitleInput = styled.input`
  border: 0 0 1px 0 solid black;
`;

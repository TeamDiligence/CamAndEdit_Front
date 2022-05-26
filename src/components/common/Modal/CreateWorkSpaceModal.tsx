import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { Button } from "../../../lib/styles/button";
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
        <div>로고</div>
        <Title>
          <Text>워크스페이스 이름</Text>
          <TitleInput />
        </Title>
        <Button onClick={() => console.log(123)}> 워크스페이스 생성 </Button>
      </Wrapper>
    </Modal>
  );
};

export default CreateWorkSpaceModal;

const Wrapper = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const Text = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const TitleInput = styled.input`
  font-size: 1.3rem;
  border: 0;
  width: 80%;
  border-bottom: 1px solid black;
  text-align: center;
  &:active {
    /* background-color: black; */
  }
  &:focus {
    background-color: #eaeaea80;
    border-radius: 5px 5px 0px 0px;
    outline: 0px;
    transition: ease 0.3s;
  }
`;

import styled from "@emotion/styled";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { createWorkSpace, getUserInfo } from "../../../lib/api/user";
import { Button } from "../../../lib/styles/button";
import { User } from "../../../lib/types/user";
import { createWorkSpaceModalStateAtom, userAtom } from "../../../states/main";
import Modal from "./Modal";
export interface CreateWorkSpaceModalProps {}

const CreateWorkSpaceModal = ({}: CreateWorkSpaceModalProps) => {
  const [createWorkSpaceModalState, setCreateWorkSpaceModalState] =
    useRecoilState<boolean>(createWorkSpaceModalStateAtom);
  const setUser = useSetRecoilState<User>(userAtom);
  const [value, setValue] = useState<string>("");

  const onHandleState = () => {
    setCreateWorkSpaceModalState(!createWorkSpaceModalState);
  };
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent
  ) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreateWorkSpace();
    }
  };
  const handleCreateWorkSpace = async () => {
    const response = await createWorkSpace(value);
    const { success, message } = response;
    if (success) {
      const { data } = await getUserInfo();
      setUser(data);
      setCreateWorkSpaceModalState(!createWorkSpaceModalState);
    } else {
      alert(message);
    }
  };

  return (
    <Modal state={createWorkSpaceModalState} onHandleState={onHandleState}>
      <Wrapper>
        <div>로고</div>
        <Title>
          <Text>워크스페이스 이름</Text>
          <TitleInput
            value={value}
            onChange={onChangeValue}
            onKeyPress={handleEnter}
          />
        </Title>
        <Button onClick={handleCreateWorkSpace}>워크스페이스 생성</Button>
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

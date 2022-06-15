import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getUserInfo } from "../../../../lib/api/user";
import { createWorkSpace } from "../../../../lib/api/workSpace";
import { Button } from "../../Custom/Button";
import { User } from "../../../../lib/types/user";
import {
  createWorkSpaceModalStateAtom,
  userAtom,
} from "../../../../states/main";
import Modal from "../Modal";
import * as S from "./style";
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
      <S.Wrapper>
        <div>로고</div>
        <S.Title>
          <S.Text>워크스페이스 이름</S.Text>
          <S.TitleInput
            value={value}
            onChange={onChangeValue}
            onKeyPress={handleEnter}
          />
        </S.Title>
        <Button onClick={handleCreateWorkSpace}>워크스페이스 생성</Button>
      </S.Wrapper>
    </Modal>
  );
};

export default CreateWorkSpaceModal;

import styled from "@emotion/styled";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../../../lib/styles/button";
import { Select, Option } from "../../../lib/styles/select";
import { User, userListDummy } from "../../../lib/types/user";
import {
  inviteModalStateAtom,
  memberListStateAtom,
  workSpaceStateAtom,
} from "../../../states/workspace";
import Modal from "./Modal";
export interface InviteModalProps {}
export interface MemberProps {
  member: User;
}

const InviteModal = ({}: InviteModalProps) => {
  const [inviteModalState, setInviteModalState] =
    useRecoilState<boolean>(inviteModalStateAtom);
  const [value, setValue] = useState<string>("");
  const workSpaceState = useRecoilValue(workSpaceStateAtom);
  const [memberList, setMemberList] = useRecoilState(memberListStateAtom);
  const onHandleState = () => {
    setInviteModalState(!inviteModalState);
  };
  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent
  ) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      // handleCreateWorkSpace();
    }
  };

  // const memberList = userListDummy;

  // useEffect(() => {
  //   const memberListState = workSpaceState.memberList;
  //   setMemberList(memberListState);
  //   console.log(memberList);
  // });

  return (
    <Modal state={inviteModalState} onHandleState={onHandleState}>
      <Wrapper>
        <Form>
          <EmailInput
            value={value}
            onChange={onChangeValue}
            onKeyPress={handleEnter}
            placeholder="이메일"
          />
          <Select name="role">
            <Option value="edit">edit</Option>
            <Option value="write">write</Option>
            <Option value="both">edit / write</Option>
          </Select>
          <Button onClick={() => console.log(123)}>초대하기</Button>
        </Form>
        <hr />
        <MemberListWrapper>
          <div>참여자</div>
          {memberList.map((member: User, i) => (
            <Member key={i} member={member} />
          ))}
        </MemberListWrapper>
      </Wrapper>
    </Modal>
  );
};

export default InviteModal;

const Wrapper = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 728px;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding: 40px 0px;
  box-sizing: border-box;
  & > select {
    height: 100%;
    margin-left: auto;
  }
  & > button {
    margin-left: 1rem;
  }
`;

const EmailInput = styled.input`
  font-size: 1.3rem;
  border: 0;
  border-bottom: 1px solid black;
  padding-left: 1.3rem;
  margin-left: 1.3rem;
  &:focus {
    background-color: #eaeaea80;
    border-radius: 5px 5px 0px 0px;
    outline: 0px;
    transition: ease 0.3s;
  }
`;

const MemberListWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e6e64b;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  box-sizing: border-box;
  & > div:first-of-type {
    width: 100%;
    margin-right: auto;
    padding: 2rem 2rem 0 2rem;
    font-size: 1.3rem;
  }
`;

const Member: React.FC<MemberProps> = ({ member }) => {
  const { name, email, image, role } = member;
  return (
    <>
      <MemberWrapper>
        <img src={image === null ? "123" : image} alt="" width="50px" />
        <MemberText>{name && name}</MemberText>
        <MemberText>{email}</MemberText>
        <MemberText>{role === "admin" ? "admin" : "write"}</MemberText>
      </MemberWrapper>
      <UnderLine />
    </>
  );
};
const MemberWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 3rem minmax(100px, 200px) 3rem;
  justify-content: space-around;
`;
const MemberText = styled.div`
  padding: 1rem 0;
  margin: auto;
`;
const UnderLine = styled.div`
  width: calc(100% - 40px);
  border: 1px solid black;
  border-radius: 10px;
`;

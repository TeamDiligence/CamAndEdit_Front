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
          <div className="classification">참여자</div>
          {memberList.map((member: User, i) => (
            <Member key={i} member={member} />
          ))}
          <UnderLine />
          <div className="classification">대기자</div>
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
  max-width: 500px;
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
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  & > button {
    margin-left: 1rem;
    width: 100px;
    word-break: keep-all;
    overflow: hidden;
    font-size: 1rem;
  }
`;

const EmailInput = styled.input`
  margin: auto 0;
  border: 0;
  border-bottom: 1px solid black;
  padding: 0 0.5rem;
  box-sizing: border-box;
  margin-left: 1.3rem;
  font-size: 1.3rem;
  flex: 1;
  min-width: 100px;
  &::placeholder {
    position: absolute;
    left: calc(50% - 1.95rem);
    transition: ease 0.5s;
    margin-left: 0.5rem;
    box-sizing: border-box;
    @media (max-width: 768px) {
      font-size: 1rem;
      left: calc(50% - 1.75rem);
    }
  }

  &:focus {
    background-color: #eaeaea80;
    border-radius: 5px 5px 0px 0px;
    outline: 0px;
    transition: ease 0.3s;

    &::-webkit-input-placeholder {
      left: 0;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  overflow: visible;
`;

const MemberListWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e6e64b;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 1rem;
  & > .classification {
    /* width: 100%; */
    margin-right: auto;
    margin-bottom: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #00000033;
    /* text-decoration: underline */
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Member: React.FC<MemberProps> = ({ member }) => {
  const { name, email, image, role } = member;
  return (
    <>
      <MemberWrapper>
        <img src={image === null ? "111" : image} alt="" width="30px" />
        <MemberText>{name && name}</MemberText>
        <MemberText>{email}</MemberText>
        <MemberText>{role === "admin" ? "admin" : "write"}</MemberText>
      </MemberWrapper>
    </>
  );
};
const MemberWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 3rem minmax(100px, 200px) 3rem;

  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    & > img {
      display: none;
    }
    grid-template-columns: 3rem minmax(100px, 200px) 3rem;
    grid-column-gap: 8px;
    font-size: 0.8rem;
  }
`;
const MemberText = styled.div`
  padding: 0.5rem 0;
  margin: auto;
`;
const UnderLine = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem 0;
`;

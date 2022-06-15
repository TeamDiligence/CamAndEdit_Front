import styled from "@emotion/styled";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { sendMail } from "../../../../lib/api/invite";
import { getMemberList } from "../../../../lib/api/workSpace";
import { Button } from "../../../../lib/styles/button";
import { Select, Option } from "../../../../lib/styles/select";
import { User, userListDummy } from "../../../../lib/types/user";
import {
  inviteModalStateAtom,
  memberListStateAtom,
  workSpaceStateAtom,
} from "../../../../states/workspace";
import LoadingIcon from "../../LoadingIcon";
import Modal from "../Modal";
import * as S from "./style";
import * as C from "./contain";

export interface InviteModalProps {}

const InviteModal = ({}: InviteModalProps) => {
  const [inviteModalState, setInviteModalState] =
    useRecoilState<boolean>(inviteModalStateAtom);
  const valueRef = useRef<HTMLInputElement>(null);
  const workSpaceState = useRecoilValue(workSpaceStateAtom);
  const [{ memberList, inviteMember }, setMemberListState] =
    useRecoilState(memberListStateAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const onHandleState = () => {
    setInviteModalState(!inviteModalState);
  };
  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendinviteMail();
    }
  };
  const handleSendinviteMail = async () => {
    const id = workSpaceState.id;
    const email = valueRef.current ? valueRef.current.value.trim() : "";
    const emailCheck = emailRegCheck(email);

    const fetchInviteUser = async () => {
      const workSpaceId = workSpaceState.id;
      const memberList = await getMemberList(workSpaceId);
      setMemberListState(memberList.data);
      valueRef.current!.value = "";
    };

    if (id && emailCheck) {
      await (async () => setLoading(true))();
      await sendMail({ id, email });
      await fetchInviteUser();
      await (async () => setLoading(false))();
    }
  };

  const emailRegCheck = (email: string) => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (!regEmail.test(email)) {
      alert("이메일을 정확히 입력해주세요");
    } else return email;
  };

  return (
    <Modal state={inviteModalState} onHandleState={onHandleState}>
      <S.Wrapper>
        <S.Form>
          <S.EmailInput
            ref={valueRef}
            onKeyPress={handleEnter}
            placeholder="이메일"
          />
          <Select name="role">
            <Option value="edit">edit</Option>
            <Option value="write">write</Option>
            <Option value="both">edit / write</Option>
          </Select>
          <Button onClick={handleSendinviteMail}>초대하기</Button>
        </S.Form>
        {loading && <LoadingIcon />}
        <hr />
        <S.MemberListWrapper>
          <div className="classification">참여자</div>
          {memberList.map((member: User, i) => (
            <C.Member key={i} member={member} />
          ))}
          <S.UnderLine />
          <div className="classification">대기자</div>
          {inviteMember.map((email: string, i) => (
            <C.Member key={i} invitedEmail={email} />
          ))}
        </S.MemberListWrapper>
      </S.Wrapper>
    </Modal>
  );
};

export default InviteModal;

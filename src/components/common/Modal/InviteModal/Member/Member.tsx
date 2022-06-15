import React from "react";
import { User } from "../../../../../lib/types/user";
import * as S from "./style";

export interface MemberProps {
  member?: User;
  invitedEmail?: string;
}

const Member: React.FC<MemberProps> = ({ member, invitedEmail }) => {
  if (member) {
    const { name, email, image, role } = member;
    return (
      <>
        <S.MemberWrapper>
          <img src={image === null ? "111" : image} alt="" width="30px" />
          {/* <MemberText>{name && name}</MemberText> */}
          <S.MemberText>{email}</S.MemberText>
          <S.MemberText>{role === "admin" ? "admin" : "write"}</S.MemberText>
        </S.MemberWrapper>
      </>
    );
  } else {
    return (
      <>
        <S.MemberWrapper>
          <img src="" alt="" width="30px" />
          <S.InvitedMailText>대기중</S.InvitedMailText>
          <S.InvitedMailText>{invitedEmail}</S.InvitedMailText>
          <S.MemberText></S.MemberText>
        </S.MemberWrapper>
      </>
    );
  }
};
export default Member;

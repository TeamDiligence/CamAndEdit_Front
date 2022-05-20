import * as S from "./style";
import React, { ChangeEvent, useState } from "react";
import { GoogleLogo } from "../../lib/asset";

export interface LoginProps {
  onClick: () => void;
}

const Login = ({ onClick }: LoginProps) => {
  return (
    <S.Layout>
      <S.Wrapper>
        <S.LogoWrapper>로고</S.LogoWrapper>
        <S.Title>Login</S.Title>
        <S.Description>
          문서 편집과 캠 공유를 동시에 하려면 가입하세요!
        </S.Description>
        <S.Hr />
        <S.Auth href="http://www.camandedit.xyz/api/auth/google">
          <GoogleLogo />
          Continue with Google
        </S.Auth>
      </S.Wrapper>
    </S.Layout>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading/Loading";
import { checkInvite } from "../lib/api/invite";
import { getCookie, setCookie } from "../lib/utils/cookie";
import { loginCheck } from "../lib/utils/loginCheck";

const AuthRedirectContainer = () => {
  const { search: token } = useLocation();
  const parseText = "accessToken=";
  const accessToken = token.slice(token.indexOf(parseText) + parseText.length);

  const sessionEmail = window.sessionStorage.getItem("redirect_email");
  const sessionWorkSpaceId = window.sessionStorage.getItem(
    "redirect_workSpaceId"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = getCookie("CAE_accessToken");
    // console.log(cookie, accessToken, sessionEmail, sessionWorkSpaceId);
    let path = "/";
    //로그인 후 쿠키값 저장하기
    const cookieCheck = async (cookie: any) => {
      if (!cookie) {
        setCookie("CAE_accessToken", accessToken, {
          secure: true,
        });
      }
    };

    //invite 후 세션값 저장하기
    //세션에 이메일 값이 있다 -> 리다이렉트 한번 하고 온거다.
    const sessionCheck = async () => {
      if (sessionEmail && sessionWorkSpaceId) {
        await loginCheck();
        await checkInvite({
          email: sessionEmail,
          workSpaceId: sessionWorkSpaceId,
        });
        await (async () => {
          path = "/redirect";
        })();
      }
    };

    const routing = async (path: string) => {
      navigate(path, {
        replace: true,
        state: { workSpaceId: sessionWorkSpaceId },
      });
      window.sessionStorage.clear();
    };

    (async () => {
      await cookieCheck(cookie);
      await sessionCheck();
      await routing(path);
    })();
  });

  //navigate 되기 전까지 Loading
  return <Loading />;
};

export default AuthRedirectContainer;

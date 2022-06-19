import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { checkInvite } from "../lib/api/invite";
import { getCookie, setCookie } from "../lib/utils/cookie";
import { loginCheck } from "../lib/utils/loginCheck";

const LoginRedirectPage = () => {
  const { search: token } = useLocation();
  const parseText = "accessToken=";
  const accessToken = token.slice(token.indexOf(parseText) + parseText.length);

  const navigate = useNavigate();

  const sessionEmail = window.sessionStorage.getItem("redirect_email");
  const sessionWorkSpaceId = window.sessionStorage.getItem(
    "redirect_workSpaceId"
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookie = getCookie("CAE_accessToken");
    console.log(cookie, accessToken, sessionEmail, sessionWorkSpaceId);
    const checkLoading = async () => {};

    if (!cookie) {
      setCookie("CAE_accessToken", accessToken, {
        secure: true,
      });
    }
    //세션에 이메일 값이 있다 -> 리다이렉트 한번 하고 온거다.
    if (sessionEmail && sessionWorkSpaceId) {
      (async () => {
        alert(`${sessionEmail} ${sessionWorkSpaceId}`);
        await loginCheck();
        await checkInvite({
          email: sessionEmail,
          workSpaceId: sessionWorkSpaceId,
        });
        await (async () => navigate(`/workspace/${sessionWorkSpaceId}`))();
      })();
      return window.sessionStorage.clear();
    }
  });
  //그거 아니면 그대로 메인으로 이동
  return <Navigate replace to="/" />;
};

export default LoginRedirectPage;

import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/common/Loading/Loading";
import { checkInvite } from "../lib/api/invite";
import { User } from "../lib/types/user";
import { getCookie } from "../lib/utils/cookie";
import { loginCheck } from "../lib/utils/loginCheck";
import { isLoginedAtom, redirectAtom } from "../states/global";
import { userAtom } from "../states/main";

export interface AuthCheckerContainerProps {}

const AuthCheckerContainer = ({}: AuthCheckerContainerProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const accessToken = getCookie("CAE_accessToken");
  const [isLogined, setIsLogined] = useRecoilState(isLoginedAtom);
  // const [{ isRediret, email, workSpaceId }, setRedirectInfoState] =
  //   useRecoilState(redirectAtom);
  const email = window.sessionStorage.getItem("email");
  const workSpaceId = window.sessionStorage.getItem("workSpaceId");
  const setUser = useSetRecoilState<User>(userAtom);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    const loginStateCheck = async () => {
      if (!accessToken) return false;

      const { loginState, data } = await loginCheck();
      setIsLogined(loginState);
      setLoading(false);
      setUser(data);
      // console.log(loginState, data);
      return loginState;
    };

    const routing = async (isLogined: boolean) => {
      if (isLogined) {
        switch (path) {
          case "/":
          case "/login":
          case "/Login":
            return navigate("main");
          default:
            return navigate(path);
        }
      } else return navigate("login");
    };

    (async () => {
      loginStateCheck().then((loginState) => {
        routing(loginState);
      });
    })();
  }, []);

  if (loading && isLogined) {
    return <Loading />;
  }
  return <Outlet />;
};

export default AuthCheckerContainer;

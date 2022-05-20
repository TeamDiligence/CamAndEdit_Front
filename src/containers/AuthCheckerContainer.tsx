import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Loading from "../components/common/Loading/Loading";
import { setCookie } from "../lib/utils/cookie";
import { loginCheck } from "../lib/utils/loginCheck";
import { isLoginedAtom } from "../states/global";

export interface AuthCheckerContainerProps {}

const AuthCheckerContainer = ({}: AuthCheckerContainerProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogined, setIsLogined] = useRecoilState(isLoginedAtom);

  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    const loginStateCheck = async () => {
      const loginState = await loginCheck();
      setIsLogined(loginState);
      setLoading(false);
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
      } else navigate("login");
    };

    (async () => {
      loginStateCheck().then((loginState) => {
        routing(loginState);
      });
    })();
  }, [loading]);

  if (loading && isLogined) {
    return <Loading />;
  }
  return <Outlet />;
};

export default AuthCheckerContainer;

import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/common/Loading/Loading";
import { User } from "../lib/types/user";
import { getCookie } from "../lib/utils/cookie";
import { loginCheck } from "../lib/utils/loginCheck";
import { isLoginedAtom } from "../states/global";
import { userAtom } from "../states/main";

export interface AuthCheckerContainerProps {}

const AuthCheckerContainer = ({}: AuthCheckerContainerProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const accessToken = getCookie("CAE_accessToken");
  const [isLogined, setIsLogined] = useRecoilState(isLoginedAtom);
  const setUser = useSetRecoilState<User>(userAtom);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // console.log("authchecker 랜더");
  //auth check 로직 실행 코드
  useEffect(() => {
    const loginStateCheck = async () => {
      if (!accessToken) return false;

      const { loginState, data } = await loginCheck();
      setIsLogined(loginState);
      setUser(data);
      // console.log(loginState, data);
      return loginState;
    };
    //load State 비동기로 바꿔주기
    const loadEnd = async () => {
      setLoading(false);
    };
    //로딩 이후 navigate
    const routing = async (isLogined: boolean) => {
      // console.log("routing", isLogined);
      if (isLogined) {
        switch (path) {
          case "/":
          case "/login":
          case "/Login":
            return navigate("main");
          default: {
            // console.log("path : ", path);
            return navigate(path);
          }
        }
      } else return navigate("login");
    };

    (async () => {
      const loginState = await loginStateCheck();
      await loadEnd();
      await routing(loginState);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return <Outlet />;
};

export default AuthCheckerContainer;

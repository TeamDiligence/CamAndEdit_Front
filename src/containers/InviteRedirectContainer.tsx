import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading/Loading";
import { removeCookie } from "../lib/utils/cookie";
import { loginCheck } from "../lib/utils/loginCheck";

const InviteRedirectContainer = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [sliceEmailIndex, sliceWorkSpaceIdIndex] = ["email=", "&workSpace="];
  const parsedEmail = search.slice(
    search.indexOf(sliceEmailIndex) + sliceEmailIndex.length,
    search.indexOf(sliceWorkSpaceIdIndex)
  );
  const parsedWorkSpaceId = search.slice(
    search.indexOf(sliceWorkSpaceIdIndex) + sliceWorkSpaceIdIndex.length
  );

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const checkLoading = async (state: boolean) => {
      setLoading(state);
    };

    const checkLogin = async () => {
      const { loginState, data } = await loginCheck();
      if (loginState === false) {
        throw { message: "Login failed", path: "login" };
      }
    };
    const remove = async () => {
      removeCookie("CAE_accessToken");
    };
    const setRedirectInfo = async () => {
      window.sessionStorage.setItem("redirect_email", parsedEmail);
      window.sessionStorage.setItem("redirect_workSpaceId", parsedWorkSpaceId);
    };
    const routing = async () => {
      navigate("/auth");
    };
    (async () => {
      try {
        await checkLoading(true);
        await setRedirectInfo();
        await checkLogin();
        await checkLoading(false);
        await routing();
      } catch (error: any) {
        const { path } = error;
        return navigate(`/${path}`);
      }
    })();
  });

  if (loading) {
    return <Loading />;
  }
  return <Outlet />;
};

export default InviteRedirectContainer;

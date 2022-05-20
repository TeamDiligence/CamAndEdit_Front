import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie, setCookie } from "../lib/utils/cookie";

const AuthRedirectPage = () => {
  const { search: token } = useLocation();
  const parseText = "accessToken=";
  const accessToken = token.slice(token.indexOf(parseText) + parseText.length);

  useEffect(() => {
    const cookie = getCookie("CAE_accessToken");
    if (!cookie) {
      setCookie("CAE_accessToken", accessToken, {
        secure: true,
      });
    }
  });

  return <Navigate replace to="/" />;
};

export default AuthRedirectPage;

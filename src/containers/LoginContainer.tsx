import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";

const LoginContainer = () => {
  const navigator = useNavigate();

  const onClick = () => {
    console.log("hello");
  };
  const onEnterRoom = async () => {
    await (async () => {})();
    await (async () => {})();
  };

  return <Login onClick={onClick} />;
};

export default LoginContainer;

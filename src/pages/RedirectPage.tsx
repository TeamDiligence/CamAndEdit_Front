import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Login/style";

const RedirectPage = () => {
  return (
    <Layout>
      <Link to="/main">워크스페이스 입장하기</Link>
    </Layout>
  );
};

export default RedirectPage;

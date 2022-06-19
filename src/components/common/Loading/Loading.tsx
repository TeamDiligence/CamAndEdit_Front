import React from "react";
import * as S from "./style";
import { Layout } from "../../Login/style";
const Loading = () => {
  console.log("loading 랜더");
  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <S.Loader />
    </Layout>
  );
};

export default Loading;

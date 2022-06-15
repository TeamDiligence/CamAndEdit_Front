import React from "react";
import * as S from "./style";
import { Layout } from "../../Login/style";
const Loading = () => {
  return (
    <Layout style={{ backgroundColor: "#0A69FA66" }}>
      <S.Loader />
      <S.Text> Loading... </S.Text>
    </Layout>
  );
};

export default Loading;

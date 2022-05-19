import React from "react";
import NavigationBar from "../components/Navbar/";
import MainContainer from "../containers/MainContainer";
import { PageLayout } from "../lib/styles/layout";

const MainPage = () => {
  return (
    <PageLayout>
      <NavigationBar type="main" />
      <MainContainer />
    </PageLayout>
  );
};

export default MainPage;

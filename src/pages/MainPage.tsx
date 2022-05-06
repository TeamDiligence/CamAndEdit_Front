import React from "react";
import NavigationBar from "../components/Navbar/";
import MainContainer from "../containers/MainContainer";
import { MainLayout } from "../lib/styles/layout";

const MainPage = () => {
  return (
    <MainLayout>
      <NavigationBar type="main" />
      <MainContainer />
    </MainLayout>
  );
};

export default MainPage;

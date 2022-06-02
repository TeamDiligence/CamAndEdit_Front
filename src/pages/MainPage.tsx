import React from "react";
import { useRecoilValue } from "recoil";
import CreateWorkSpaceModal from "../components/common/Modal/CreateWorkSpaceModal";
import NavigationBar from "../components/Navbar/";
import MainContainer from "../containers/MainContainer";
import { PageLayout } from "../lib/styles/layout";
import { createWorkSpaceModalStateAtom } from "../states/main";

const MainPage = () => {
  const createWorkSpaceState = useRecoilValue(createWorkSpaceModalStateAtom);

  return (
    <PageLayout>
      <NavigationBar type="main" />
      <MainContainer />
      {createWorkSpaceState && <CreateWorkSpaceModal />}
    </PageLayout>
  );
};

export default MainPage;

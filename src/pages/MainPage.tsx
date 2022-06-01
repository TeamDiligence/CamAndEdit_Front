import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import CreateWorkSpaceModal from "../components/common/Modal/CreateWorkSpaceModal";
import ProfileModal from "../components/common/Modal/ProfileModal";
import NavigationBar from "../components/Navbar/";
import MainContainer from "../containers/MainContainer";
import { PageLayout, WrapperLayout } from "../lib/styles/layout";
import {
  createWorkSpaceStateAtom,
  profileModalStateAtom,
} from "../states/main";

const MainPage = () => {
  const createWorkSpaceState = useRecoilValue(createWorkSpaceStateAtom);
  const profileModalState = useRecoilValue(profileModalStateAtom);
  return (
    <PageLayout>
      <NavigationBar type="main" />
      <WrapperLayout>
        <MainContainer />
        {profileModalState && <ProfileModal />}
      </WrapperLayout>
      {createWorkSpaceState && <CreateWorkSpaceModal />}
    </PageLayout>
  );
};

export default MainPage;

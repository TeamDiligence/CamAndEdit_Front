import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import CreateWorkSpaceModal from "../components/common/Modal/CreateWorkSpace/CreateWorkSpaceModal";
import NavigationBar from "../components/Navbar/Navbar";
import MainContainer from "../containers/MainContainer";
import ProfileModalContainer from "../containers/ProfileModalCotainer";
import { PageLayout, WrapperLayout } from "../lib/styles/layout";
import { createWorkSpaceModalStateAtom } from "../states/main";

const MainPage = () => {
  const createWorkSpaceState = useRecoilValue(createWorkSpaceModalStateAtom);

  return (
    <PageLayout>
      <NavigationBar type="main" />
      <WrapperLayout>
        <MainContainer />
        <ProfileModalContainer />
      </WrapperLayout>
      {createWorkSpaceState && <CreateWorkSpaceModal />}
    </PageLayout>
  );
};

export default MainPage;

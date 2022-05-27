import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import InviteModal from "../components/common/Modal/InviteModal";
import NavigationBar from "../components/Navbar";
import CamListContainer from "../containers/CamListContainer";
import MeetingRoomContainer from "../containers/MeetingRoomContainer";
import { PageLayout } from "../lib/styles/layout";
import { inviteModalStateAtom } from "../states/workspace";

const WorkSpacePage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const inviteModalState = useRecoilValue<boolean>(inviteModalStateAtom);
  if (!param.id) {
    navigate("/main", { replace: false });
  }

  return (
    <PageLayout>
      <NavigationBar type="workSpace" />
      <MeetingRoomContainer />
      <CamListContainer />
      <Outlet />
      {inviteModalState && <InviteModal />}
    </PageLayout>
  );
};

export default WorkSpacePage;

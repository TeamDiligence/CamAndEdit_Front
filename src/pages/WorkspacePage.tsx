import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../components/Navbar";
import CamListContainer from "../containers/CamListContainer";
import MeetingRoomContainer from "../containers/MeetingRoomContainer";
import { PageLayout } from "../lib/styles/layout";

const WorkSpacePage = () => {
  const param = useParams();
  const navigate = useNavigate();
  if (!param.id) {
    navigate("/main", { replace: false });
  }

  return (
    <PageLayout>
      <NavigationBar type="workSpace" />
      <MeetingRoomContainer />
      <CamListContainer />
      <Outlet />
    </PageLayout>
  );
};

export default WorkSpacePage;

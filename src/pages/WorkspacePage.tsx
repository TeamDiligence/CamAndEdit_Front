import React from "react";
import ResizableTab from "../components/common/ResizableTab/ResizeableTab";
import NavigationBar from "../components/Navbar/";
import CamListContainer from "../containers/CamListContainer";
import MeetingRoomContainer from "../containers/MeetingRoomContainer";
import WorkSpaceContainer from "../containers/WorkSpaceContainer";
import { PageLayout } from "../lib/styles/layout";

const WorkSpacePage = () => {
  return (
    <PageLayout>
      <NavigationBar type="workSpace" />
      <MeetingRoomContainer />
      <CamListContainer />
      <WorkSpaceContainer />
    </PageLayout>
  );
};

export default WorkSpacePage;

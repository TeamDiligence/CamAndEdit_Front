import React, { useEffect } from "react";
import Main from "../components/Main/Main";
import { WorkSpace } from "../lib/types/workSpace";
import { userWorkSpaceSelector } from "../states/main";
import { useRecoilValue } from "recoil";

const MainContainer = () => {
  const workSpaceList = useRecoilValue<Array<WorkSpace>>(userWorkSpaceSelector);
  return <Main workSpaceList={workSpaceList} />;
};

export default MainContainer;

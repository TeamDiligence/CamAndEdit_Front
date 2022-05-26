import React, { useEffect } from "react";
import Main from "../components/Main/Main";
import { WorkSpace } from "../lib/types/workSpace";
import { userAtom, userWorkSpaceSelector } from "../states/main";
import { useRecoilValue } from "recoil";

const MainContainer = () => {
  const workSpaceList = useRecoilValue<Array<WorkSpace>>(userWorkSpaceSelector);
  // const user = useRecoilValue(userAtom);
  // useEffect(() => {
  //   console.log(user);
  // });

  return <Main workSpaceList={workSpaceList} />;
};

export default MainContainer;

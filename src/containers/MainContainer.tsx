import { useRecoilValue } from "recoil";
import Main from "../components/Main/Main";
import { WorkSpace } from "../lib/types/workSpace";
import { userWorkSpaceSelector } from "../states/main";

const MainContainer = () => {
  const workSpaceList = useRecoilValue<Array<WorkSpace>>(userWorkSpaceSelector);
  return <Main workSpaceList={workSpaceList} />;
};

export default MainContainer;

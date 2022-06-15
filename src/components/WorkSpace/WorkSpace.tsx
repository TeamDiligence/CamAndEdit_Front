import { WorkSpace as WorkSpaceType } from "../../lib/types/workSpace";
import * as S from "./style";

export interface WorkSpaceProps {
  workSpaceState: WorkSpaceType;
}

const WorkSpace = ({ workSpaceState }: WorkSpaceProps) => {
  return <S.Wrapper></S.Wrapper>;
};

export default WorkSpace;

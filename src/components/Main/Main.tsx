import styled from "@emotion/styled";
import { userListDummy } from "../../lib/types/user";
import {
  WorkSpace,
  WorkSpaceDummy,
  WorkSpaceDummy1,
  WorkSpaceDummy2,
  WorkSpaceDummy3,
} from "../../lib/types/workSpace";
import Card from "./Card";
import * as S from "./style";
export interface MainProps {
  workSpaceList: Array<WorkSpace>;
}

// const workSpaces = [
//   {
//     ...WorkSpaceDummy,
//     users: [...userListDummy],
//   },
//   {
//     ...WorkSpaceDummy1,
//     users: [...userListDummy],
//   },
//   {
//     ...WorkSpaceDummy2,
//     users: [...userListDummy],
//   },
//   {
//     ...WorkSpaceDummy3,
//     users: [...userListDummy],
//   },
// ];

const Main = ({ workSpaceList = [] }: MainProps) => {
  return (
    <S.Wrapper>
      <S.Title>나의 워크스페이스</S.Title>
      <S.Grid>
        {workSpaceList.length === 0 ? (
          <div> 워크스페이스가 비어있습니다 </div>
        ) : (
          workSpaceList.map((c) => (
            <Card
              key={c.id}
              workSpaceId={c.id}
              workSpaceName={c.name}
              createAt={c.createdAt}
              memberList={c.memberList}
            />
          ))
        )}
      </S.Grid>
    </S.Wrapper>
  );
};

export default Main;

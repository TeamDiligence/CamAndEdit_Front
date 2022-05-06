import styled from "@emotion/styled";
import { userListDummy } from "../../lib/types/user";
import {
  WorkSpaceDummy,
  WorkSpaceDummy1,
  WorkSpaceDummy2,
  WorkSpaceDummy3,
} from "../../lib/types/workSpace";
import Card from "./Card";
import * as S from "./style";
export interface MainProps {}

const mockUpData = [
  {
    ...WorkSpaceDummy,
    users: [...userListDummy],
  },
  {
    ...WorkSpaceDummy1,
    users: [...userListDummy],
  },
  {
    ...WorkSpaceDummy2,
    users: [...userListDummy],
  },
  {
    ...WorkSpaceDummy3,
    users: [...userListDummy],
  },
  {
    ...WorkSpaceDummy3,
    users: [...userListDummy],
  },
  {
    ...WorkSpaceDummy2,
    users: [...userListDummy],
  },
];

const Main = ({}: MainProps) => {
  return (
    <S.Wrapper>
      <S.Title>나의 워크스페이스</S.Title>
      <S.Grid>
        {mockUpData.map((c) => (
          <Card
            key={c.workSpaceId}
            workSpaceName={c.workSpaceName}
            createAt={c.createAt}
            users={c.users}
          />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default Main;

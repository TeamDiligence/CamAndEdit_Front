import { WorkSpace } from "../../lib/types/workSpace";
import * as S from "./style";
import * as C from "./contain";
export interface MainProps {
  workSpaceList: Array<WorkSpace>;
}

const Main = ({ workSpaceList = [] }: MainProps) => {
  return (
    <S.Wrapper>
      <S.Title>나의 워크스페이스</S.Title>
      <S.Grid>
        {workSpaceList.length === 0 ? (
          <div> 워크스페이스가 비어있습니다 </div>
        ) : (
          workSpaceList.map((cardInfo) => (
            <C.Card
              key={cardInfo.id}
              workSpaceId={cardInfo.id}
              workSpaceName={cardInfo.name}
              createdAt={cardInfo.createdAt}
              memberList={cardInfo.memberList}
            />
          ))
        )}
      </S.Grid>
    </S.Wrapper>
  );
};

export default Main;

import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../../lib/types/user";
import * as S from "./style";
import * as C from "./contain";
export interface CardProps {
  key: number;
  workSpaceId?: number;
  workSpaceName: string;
  createdAt: Date;
  memberList: Array<User>;
}

const Card: React.FC<CardProps> = ({
  workSpaceId,
  workSpaceName,
  createdAt,
  memberList,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/workSpace/${workSpaceId}`);
  };

  return (
    //
    <S.Wrapper onClick={handleNavigate}>
      <S.WorkSpaceName>{workSpaceName}</S.WorkSpaceName>
      <S.CreatedAt>
        {new Date(createdAt).toISOString().slice(0, 10)}
      </S.CreatedAt>
      <S.UserListWrapper>
        {memberList.map((user, i) => (
          <C.UserProfile key={i} name={user.name} image={user.image} />
        ))}
      </S.UserListWrapper>
    </S.Wrapper>
  );
};

export default Card;

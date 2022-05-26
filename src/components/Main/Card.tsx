import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { ProfileIcon } from "../../lib/asset";
import { User } from "../../lib/types/user";
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
  return (
    //
    <Wrapper onClick={() => console.log(workSpaceId)}>
      {/* <Link to="/workspace"> */}
      <WorkSpaceName>{workSpaceName}</WorkSpaceName>
      <CreatedAt>{new Date(createdAt).toISOString().slice(0, 10)}</CreatedAt>
      <UserListWrapper>
        {memberList.map((user, i) => (
          <UserProfile key={i} name={user.name} image={user.image} />
        ))}
      </UserListWrapper>
      {/* </Link> */}
    </Wrapper>
  );
};

export default Card;
const Wrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
`;

const WorkSpaceName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const CreatedAt = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
const UserListWrapper = styled.div`
  margin-top: auto;
  bottom: 10px;
  display: flex;
  & > div {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }
`;

const UserProfile: React.FC<{ name: string; image: string | null }> = ({
  name,
  image,
}) => {
  const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const ProfileImage = ({ image }: { image: string }) => {
    return <img src={image} alt={""} width="20px" height="20px" />;
  };

  const Name = styled.div`
    font-size: 0.3rem;
    color: gray;
  `;
  return (
    <UserWrapper>
      {image ? (
        <ProfileImage image={image} />
      ) : (
        <ProfileIcon width={20} height={20} />
      )}
      <Name>{name}</Name>
    </UserWrapper>
  );
};

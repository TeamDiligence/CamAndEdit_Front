import styled from "@emotion/styled";
import React from "react";
export interface UserCamProps {
  nickName: string;
}

const UserCam = ({ nickName }: UserCamProps) => {
  return (
    <UserCamLayout>
      <video />
      <NickName>{nickName}</NickName>
    </UserCamLayout>
  );
};

export default UserCam;

const UserCamLayout = styled.div`
  height: 100%;
  position: relative;
  background-color: white;
`;

const NickName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

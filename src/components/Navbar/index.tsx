import styled from "@emotion/styled";
import React from "react";
import MainNavBar from "./MainNavBar";
import WorkSpaceNavBar from "./WorkSpaceNavBar";

export type NavBarType = "main" | "workSpace";
export interface NavBarProps {
  type: NavBarType;
}

const NavBar: React.FC<NavBarProps> = ({ type }) => {
  return (
    <NavBarLayout>
      {type === "main" && <MainNavBar />}
      {type === "workSpace" && <WorkSpaceNavBar />}
    </NavBarLayout>
  );
};

export default NavBar;

const NavBarLayout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: grid;
  padding: 0 10px;
  box-sizing: border-box;
  align-items: center;
  grid-template-columns: 40px 40px 1fr 40px 40px;
  overflow: hidden;
`;

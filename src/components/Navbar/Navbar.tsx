import React from "react";
import * as S from "./style";
import * as C from "./contain";

export type NavBarType = "main" | "workSpace";
export interface NavBarProps {
  type: NavBarType;
}

const NavBar: React.FC<NavBarProps> = ({ type }) => {
  return (
    <S.NavBarLayout>
      {type === "main" && <C.MainNavBar />}
      {type === "workSpace" && <C.WorkSpaceNavBar />}
    </S.NavBarLayout>
  );
};

export default NavBar;

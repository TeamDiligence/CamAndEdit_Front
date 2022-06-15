import React from "react";
import * as C from "./contain";
import * as S from "./style";

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

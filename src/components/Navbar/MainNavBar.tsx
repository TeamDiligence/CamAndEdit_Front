import styled from "@emotion/styled";
import React from "react";
import * as icons from "../../lib/asset/svg";
import { ICON_MIDDLE_SIZE, ICON_SMALL_SIZE } from "../../lib/styles/size";
import CustomIcon from "../common/CustomIcon";

const MainNavBar: React.FC<any> = () => {
  return (
    <>
      <Middle>
        <CustomIcon
          icon={icons.PlusIcon}
          height={ICON_MIDDLE_SIZE}
          onClick={() => {
            console.log("워크스페이스 추가");
          }}
        />
      </Middle>
      <CustomIcon
        icon={icons.ProfileIconSvg}
        height={ICON_SMALL_SIZE}
        gridColumn="4"
        onClick={() => {
          console.log(12132);
        }}
      />

      <CustomIcon
        icon={icons.LogoutIconSvg}
        size={ICON_SMALL_SIZE}
        gridColumn="5/5"
      />
    </>
  );
};
export default MainNavBar;

const Middle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  grid-column: 3;
  & > div {
    margin-left: 10px;
  }
`;

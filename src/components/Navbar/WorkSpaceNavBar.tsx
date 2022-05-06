import styled from "@emotion/styled";
import React from "react";
import * as icons from "../../lib/asset/svg";
import { ICON_SMALL_SIZE } from "../../lib/styles/size";
import CustomIcon from "../common/CustomIcon";

const WorkSpaceNavBar: React.FC<any> = () => {
  return (
    <>
      <CustomIcon
        icon={icons.ListIconSvg}
        width={ICON_SMALL_SIZE}
        onClick={() => {
          console.log("아이콘 onClick");
        }}
      />
      <CustomIcon icon={icons.GroupIconSvg} width={ICON_SMALL_SIZE} />
      <Middle>
        <CustomIcon icon={icons.AddDocsIconSvg} width={ICON_SMALL_SIZE} />
        <CustomIcon icon={icons.AddCanvasIconSvg} width={ICON_SMALL_SIZE} />
      </Middle>
      <OverSizeIconStyle>
        <div
          style={{
            width: "100px",
            backgroundColor: "#769dff",
            borderRadius: "4px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px",
            boxSizing: "border-box",
          }}>
          hellllo
        </div>
      </OverSizeIconStyle>
      <CustomIcon icon={icons.LogoutIconSvg} width={ICON_SMALL_SIZE} />
    </>
  );
};

export default WorkSpaceNavBar;

const Middle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  grid-column: 3/5;
  & > div {
    margin-left: 10px;
  }
`;

const OverSizeIconStyle = styled.div`
  width: 100%;
  & > div {
    transform: translateX(calc(-100% + 40px));
  }
`;

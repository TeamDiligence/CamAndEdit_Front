import styled from "@emotion/styled";
import { tabPosition } from "../../../lib/types/resizeableTab";

export const ResizableTabWrapper = styled.div<tabProps>`
position: absolute;
bottom: ${(props) => (props.position === "bottom" ? 0 : "")};
height: 100%;
width: 100%;
background-color: blue;
z-index: 1;
`;

type tabProps = {
position: tabPosition;
};

export const ResizeSide = styled.div<tabProps>`
position: absolute;
z-index: 1;
right: 0;
top: ${(props) => props.position === "bottom" && 0};
width: 10px;
height: 100%;
/* background-color: red; */
transform: translateX(50%);

&:hover {
  cursor: col-resize;
}
`;
export const ResizeSideBottom = styled.div`
position: absolute;
z-index: 1;
top: 0;
width: 100%;
height: 10px;
/* background-color: blue; */
transform: translateY(-50%);

&:hover {
  cursor: row-resize;
}
`;

export const ResizeChildren = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: pink;
overflow: hidden;
&:hover {
  cursor: default;
}
`;

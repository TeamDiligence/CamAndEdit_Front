import React from "react";
import ResizableTab from "../common/ResizableTab/ResizeableTab";
export interface CamListProps {
  camListState: boolean;
}

const CamList = ({ camListState }: CamListProps) => {
  return camListState ? (
    <ResizableTab position="bottom">이건 캠리스트</ResizableTab>
  ) : null;
};

export default CamList;

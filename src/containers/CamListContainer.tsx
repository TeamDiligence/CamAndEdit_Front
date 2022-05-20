import React from "react";
import { useRecoilValue } from "recoil";
import CamList from "../components/CamList/CamList";
import { camListStateAtom } from "../states/workspace";

const CamListContainer = () => {
  const camListState = useRecoilValue(camListStateAtom);
  return <CamList camListState={camListState} />;
};

export default CamListContainer;

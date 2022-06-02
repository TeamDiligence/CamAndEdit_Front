import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/common/Loading/Loading";
import WorkSpace from "../components/WorkSpace/WorkSpace";
import { getMemberList, getWorkSpaceInfo } from "../lib/api/workSpace";
import {
  documentListAtom,
  meetingRoomStateAtom,
  memberListStateAtom,
  workSpaceStateAtom,
} from "../states/workspace";

const WorkSpaceContainer = () => {
  const [workSpaceState, setWorkSpaceState] =
    useRecoilState(workSpaceStateAtom);
  const setMeetingRoomState = useSetRecoilState(meetingRoomStateAtom);
  const [memberListState, setMemberListState] =
    useRecoilState(memberListStateAtom);
  const { id } = useParams();

  useEffect(() => {
    const fetchWorkSpace = async () => {
      const workSpaceInfo = await getWorkSpaceInfo(id!);
      const memberList = await getMemberList(id!);
      console.log(workSpaceInfo, memberList);
      setWorkSpaceState(workSpaceInfo.data);
      setMeetingRoomState(workSpaceInfo.data.meetingRoom);
      setMemberListState(memberList.data);
    };
    fetchWorkSpace();
  }, []);

  if (!workSpaceState) {
    return <Loading />;
  }

  return <WorkSpace workSpaceState={workSpaceState} />;
};

export default WorkSpaceContainer;

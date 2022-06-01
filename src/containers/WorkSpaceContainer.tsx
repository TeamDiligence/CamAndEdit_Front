import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/common/Loading/Loading";
import WorkSpace from "../components/WorkSpace/WorkSpace";
import { getWorkSpaceInfo } from "../lib/api/workSpace";
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
  const setMemberListState = useSetRecoilState(memberListStateAtom);
  const { id } = useParams();
  useEffect(() => {
    const fetchWorkSpace = async () => {
      const response = await getWorkSpaceInfo(id!);
      setWorkSpaceState(response.data);
      setMeetingRoomState(response.data.meetingRoom);
      setMemberListState(response.data.memberList);
    };
    fetchWorkSpace();
    console.log(workSpaceState);
  }, []);

  if (!workSpaceState) {
    return <Loading />;
  }

  return <WorkSpace workSpaceState={workSpaceState} />;
};

export default WorkSpaceContainer;

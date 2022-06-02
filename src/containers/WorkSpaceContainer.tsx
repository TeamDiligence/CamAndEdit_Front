import React, { useEffect } from "react";
import { Navigate, Route, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/common/Loading/Loading";
import WorkSpace from "../components/WorkSpace/WorkSpace";
import * as api from "../lib/api/workSpace";
import { isLoginedAtom, workSpaceLoadErrorAtom } from "../states/global";
import { userAtom } from "../states/main";
import {
  meetingRoomStateAtom,
  memberListStateAtom,
  workSpaceStateAtom,
} from "../states/workspace";

const WorkSpaceContainer = () => {
  const [loadErrorState, setLoadErrorState] = useRecoilState<boolean>(
    workSpaceLoadErrorAtom
  );
  const [workSpaceState, setWorkSpaceState] =
    useRecoilState(workSpaceStateAtom);
  const setMeetingRoomState = useSetRecoilState(meetingRoomStateAtom);
  const [memberListState, setMemberListState] =
    useRecoilState(memberListStateAtom);
  const user = useRecoilState(userAtom);
  const { id } = useParams();

  useEffect(() => {
    const getWorkSpace = async () => {
      const workSpaceInfo = await api.getWorkSpaceInfo(id!);
      // console.log(workSpaceInfo.data, user);
      if (!workSpaceInfo.success) {
        console.log("오류확인");
        setLoadErrorState(true);
        return false;
      }

      setWorkSpaceState(workSpaceInfo.data);
      setMeetingRoomState(workSpaceInfo.data.meetingRoom);
    };
    const getMemberList = async (f: boolean = true) => {
      if (!f) return;
      const memberList = await api.getMemberList(id!);
      setMemberListState(memberList.data);
    };

    const fetchWorkSpace = async () => {
      getWorkSpace().then((f) => getMemberList(f));
    };

    fetchWorkSpace();
  }, []);
  if (loadErrorState) {
    return (
      <div>
        페이지 오류
        <a href="/main"> 돌아가기 </a>
      </div>
    );
  }

  if (!workSpaceState) {
    return <Loading />;
  }

  return <WorkSpace workSpaceState={workSpaceState} />;
};

export default WorkSpaceContainer;

// import React, { useState } from 'react';
// import { useRecoilState, useRecoilValue } from 'recoil';
import InviteModal from "../components/common/Modal/InviteModal/InviteModal";
// import { sendMail } from '../lib/api/invite';
// import { getMemberList } from '../lib/api/workSpace';
// import { emailRegCheck } from '../lib/utils/reg';
// import { inviteModalStateAtom, memberListStateAtom, workSpaceStateAtom } from '../states/workspace';

const InviteModalContainer = () => {
  //     const ref = useRef<HTMLInputElement>(null);
  //     const [inviteModalState, setInviteModalState] =
  //     useRecoilState<boolean>(inviteModalStateAtom);
  //      const workSpaceState = useRecoilValue(workSpaceStateAtom);
  //      const [{ memberList, inviteMember }, setMemberListState] =
  //     useRecoilState(memberListStateAtom);
  //     const [loading, setLoading] = useState<boolean>(false);
  //      const onHandleState = () => {
  //     setInviteModalState(!inviteModalState);
  //      };

  //     const handleEnter = (e: KeyboardEvent) => {

  //     if (e.key === "Enter") {
  //       handleSendinviteMail();
  //     }
  //   };
  //   const handleSendinviteMail = async () => {
  //     const id = workSpaceState.id;
  //     const email = valueRef.current ? valueRef.current.value.trim() : "";
  //     const emailCheck = emailRegCheck(email);

  //     const fetchInviteUser = async () => {
  //       const workSpaceId = workSpaceState.id;
  //       const memberList = await getMemberList(workSpaceId);
  //       setMemberListState(memberList.data);
  //       valueRef.current!.value = "";
  //     };

  //     if (id && emailCheck) {
  //       await (async () => setLoading(true))();
  //       await sendMail({ id, email });
  //       await fetchInviteUser();
  //       await (async () => setLoading(false))();
  //     }
  //   };

  return <InviteModal />;
};

export default InviteModalContainer;

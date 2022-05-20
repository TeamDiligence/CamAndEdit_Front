// import React, { ChangeEvent, ReactEventHandler, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import Login from "../components/Login/Login";
// import { roomInfoAtom, userAtom, userInfoAtom } from "../states/main";
// export interface enterRoomType {
//   roomName: string;
//   nickname: string;
// }

// const enterRoomState: enterRoomType = {
//   roomName: "",
//   nickname: "",
// };

// const LoginContainer = () => {
//   const navigator = useNavigate();
//   const [enterRoomInfo, setEnterRoomInfo] =
//     useState<enterRoomType>(enterRoomState);
//   const [user, setUser] = useRecoilState<string>(userAtom);
//   const [roomInfo, setRoomInfo] = useRecoilState(roomInfoAtom);
//   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.currentTarget;

//     setEnterRoomInfo({
//       ...enterRoomInfo,
//       [id]: value,
//     });
//   };

//   const onEnterRoom = async () => {
//     await (async () => {
//       setRoomInfo({
//         ...roomInfo,
//         roomName: enterRoomInfo.roomName,
//       });
//       setUser(enterRoomInfo.nickname);
//     })();
//     await (async () => {
//       navigator(`/room/${enterRoomInfo.roomName}`);
//     })();
//   };

//   return (
//     <Login
//       handleInput={handleInput}
//       onEnterRoom={onEnterRoom}
//       enterRoomInfo={enterRoomInfo}
//     />
//   );
// };

// export default LoginContainer;

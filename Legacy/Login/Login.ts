// import { css } from "@emotion/react";
// import styled from "@emotion/styled";
// import React, { ChangeEvent, useState } from "react";
// import { enterRoomType } from "../src/containers/LoginContainer";

// export interface LoginProps {
//   handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
//   onEnterRoom: () => void;
//   enterRoomInfo: enterRoomType;
// }

// const Login = ({ handleInput, onEnterRoom, enterRoomInfo }: LoginProps) => {
//   return (
//     <LoginLayout>
//       <LoginEnterLayout>
//         <div
//           style={{
//             fontSize: "2rem",
//             marginBottom: "3rem",
//           }}>
//           로그인
//         </div>
//         <div>
//           <LoginInput
//             id="roomName"
//             value={enterRoomInfo.roomName}
//             onChange={(e) => handleInput(e)}
//             placeholder="방이름"
//           />
//           <LoginInput
//             id="nickname"
//             value={enterRoomInfo.nickname}
//             onChange={(e) => handleInput(e)}
//             placeholder="닉네임이름"
//           />
//         </div>
//         <LoginButton onClick={() => onEnterRoom()}>방입장</LoginButton>
//       </LoginEnterLayout>
//     </LoginLayout>
//   );
// };

// export default Login;

// const LoginLayout = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const LoginEnterLayout = styled.div`
//   width: 50%;
//   height: 50vh;
//   border: 1px solid #57bfff;
//   border-radius: 4rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
// `;

// const LoginInput = styled.input`
//   border: 0px;
//   border-bottom: 2px solid #c3c3c3;
//   margin-left: 1rem;
// `;

// const LoginButton = styled.button`
//   padding: 0.5rem 1rem;
//   margin-top: 2rem;
//   background-color: #1ea9ff;
//   font-size: 1.8rems;
//   border: 0px;
//   border-radius: 0.3rem;
//   color: #ffffff;
//   & :hover {
//     background-color: #008ee6;
//   }
//   & :active {
//     background-color: #aee0ff;
//   }
// `;

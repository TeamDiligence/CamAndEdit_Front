import styled from "@emotion/styled";

export const ModalBackground = styled("div")`
z-index: 2;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;
display: ${({ modalState }: { modalState: boolean }) =>
  modalState ? "flex" : "none"};
`;

export const ModalContent = styled.div`
z-index: 6;
padding: 2rem;
/* border: 1px solid #000000; */
border-radius: 4px;
overflow: hidden;
background-color: #ffffff;
backdrop-filter: blur(20px);
`;

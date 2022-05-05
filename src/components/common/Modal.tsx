import styled from "@emotion/styled";
import React, { useState } from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const onHandleModalState = () => {
    setModalState(false);
  };
  const onHandlePropgation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const [modalState, setModalState] = useState<boolean>(true);
  return (
    <ModalBackground onClick={onHandleModalState} modalState={modalState}>
      <ModalContent onClick={onHandlePropgation}>{children}</ModalContent>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled("div")`
  z-index: 5;
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

const ModalContent = styled.div`
  padding: 2rem;
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
  background-color: #ffffff;
`;

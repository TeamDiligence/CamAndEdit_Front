import React from "react";
import * as S from "./style";

type ModalProps = {
  state: boolean;
  onHandleState: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children, state, onHandleState }) => {
  // const onHandleModalState = () => {
  //   setModalState(false);
  // };
  const onHandlePropgation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <S.ModalBackground onClick={onHandleState} modalState={state}>
      <S.ModalContent onClick={onHandlePropgation}>{children}</S.ModalContent>
    </S.ModalBackground>
  );
};

export default Modal;

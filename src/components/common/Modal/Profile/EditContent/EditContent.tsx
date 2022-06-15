import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { EditValue } from "../../../../../containers/ProfileModalCotainer";
import { ModifyIcon } from "../../../../../lib/asset/svg";
import { Input } from "../../../Custom/Input";
import Icon from "../../../Custom/Icon";
import * as S from "./style";

type EditContentProps = {
  modalState: boolean;
  setModalState: (b: boolean) => void;
  handleSubmit: (e: EditValue) => void;
  name: string;
  description: string;
};

const EditContent = ({
  modalState,
  setModalState,
  handleSubmit,
  name,
  description,
}: EditContentProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    nameRef.current!.value = name;
    areaRef.current!.value = description;
  });

  return (
    <S.Content
      onClick={(e) => {
        e.stopPropagation();
      }}
      modalState={modalState}>
      <Icon
        icon={ModifyIcon}
        size={25}
        onClick={() => {
          setModalState(!modalState);
          handleSubmit({
            name: nameRef.current!.value,
            description: areaRef.current!.value,
          });
        }}
      />
      <S.Form>
        이름
        <Input ref={nameRef} />
        설명
        <S.TextArea ref={areaRef} />
      </S.Form>
    </S.Content>
  );
};
export default EditContent;

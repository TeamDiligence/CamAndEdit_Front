/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as S from "./style";

type CustomIconProps = {
  size?: number;
  width?: number;
  height?: number;
  icon: string;
  alt?: string;
  gridColumn?: string;
  onClick?: () => void;
};
const CustomIcon: React.FC<CustomIconProps> = ({
  width,
  height,
  size,
  icon,
  alt,
  onClick,
  gridColumn,
}) => {
  return (
    <S.Wrapper onClick={onClick} gridColumn={gridColumn}>
      <S.Img
        alt={alt}
        src={icon}
        isButton={onClick ? true : false}
        width={width}
        height={height}
        size={size}
      />
    </S.Wrapper>
  );
};
export default CustomIcon;

/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./style";

type IconProps = {
  size?: number;
  width?: number;
  height?: number;
  icon: string;
  alt?: string;
  gridColumn?: string;
  onClick?: () => void;
};
const Icon: React.FC<IconProps> = ({
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
export default Icon;

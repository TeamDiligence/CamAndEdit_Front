/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

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
    <div
      onClick={onClick}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: ${gridColumn};
      `}>
      <img
        alt={alt}
        src={icon}
        css={css`
          ${size && `width:${size}px; height:${size}px;`}
          ${width && `width:${width}px;`};
          ${height && `height:${height}px;`}
          ${onClick &&
          css`
            border-radius: 4px;
            padding: 2px;
            box-sizing: border-box;
            &: hover {
              background-color: #d5d5d5a4;
            }
            &: active {
              background-color: #ffffff;
            }
          `}
        `}
      />
    </div>
  );
};
export default CustomIcon;

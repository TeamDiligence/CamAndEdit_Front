import styled from "@emotion/styled";

type LoadingIconProps = {
  width?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

const LoadingIcon = styled.div<LoadingIconProps>`
  display: inline-block;
  position: absolute;
  width: ${(props) => props.width || 30}px;
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  bottom: ${(props) => props.bottom || ""};
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #4d4d4d;
  animation: spin 1s linear infinite;
  -webkit-animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default LoadingIcon;

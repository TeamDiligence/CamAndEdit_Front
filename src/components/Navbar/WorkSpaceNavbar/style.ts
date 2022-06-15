import styled from "@emotion/styled";

export const Middle = styled.div`
display: flex;
width: 100%;
justify-content: center;
grid-column: 3;
& > div {
  margin-left: 10px;
}
`;

export const OverSizeIconStyle = styled.div`
& > div {
  width: calc(100% + 40px);
  flex: 1;
  background-color: #769dff;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  box-sizing: border-box;
  transform: translateX(calc(-100% + 40px));
  font-size: 1.2 rem;
  font-weight: 500;
  &:hover {
    background-color: #4a7bf6;
    transition: ease 0.2s;
  }
  &:active {
    background-color: #bfd0fa;
  }
}
`;

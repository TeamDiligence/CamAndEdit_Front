import styled from "@emotion/styled";

export const Select = styled.select`
  border:0px;
  font-size:1rem;
  text-align:center;
  &:focus-visible{
    outline:0px;
    border-radius:4px;
    background-color: #CCDDFF99;
    transition: ease 0.2s;
  } &:focus{
    outline:0px;
    /* background-color: #CCDDFF; */
  }
`;

export const Option = styled.option``;

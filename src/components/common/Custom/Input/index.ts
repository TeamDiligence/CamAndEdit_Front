import styled from "@emotion/styled";

export const Input = styled.input`
border: 0px;
border-radius : 4px 4px 0 0;
border-bottom: 2px solid #c3c3c3;
&::placeholder {
    position: absolute;
    left: calc(50% - 1.95rem);
    transition: ease 0.5s;
    margin-left: 0.5rem;
    box-sizing: border-box;
    @media (max-width: 768px) {
      font-size: 1rem;
      left: calc(50% - 1.75rem);
    }
  }
  &:focus {
    background-color: #eaeaea80;
    border-radius: 5px 5px 0px 0px;
    outline: 0px;
    transition: ease 0.3s;

    &::-webkit-input-placeholder {
      left: 0;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  overflow: visible;`;
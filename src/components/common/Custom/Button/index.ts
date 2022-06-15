import styled from "@emotion/styled";

export const Button = styled.button`
padding: 0.5rem 1rem;
/* margin-top: 2rem; */
background-color: #1ea9ff;
font-size: 1.3rem;
border: 0px;
border-radius: 0.3rem;
color: #ffffff;
&:hover {
  background-color: #008ee6;
}
&:active {
  background-color: #aee0ff;
}
transition: 0.2s;
@media (min-width: 768px) {
    font-size: 1rem;
  }
`;

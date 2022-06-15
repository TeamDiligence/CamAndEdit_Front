import styled from "@emotion/styled";

export const Wrapper = styled.div`
width: 50vw;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
`;

export const Form = styled.div`
width: 100%;
display: flex;
align-items: start;
padding: 40px 0px;
box-sizing: border-box;
& > select {
  height: 100%;
  margin-left: auto;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}
& > button {
  margin-left: 1rem;
  width: 100px;
  word-break: keep-all;
  overflow: hidden;
  font-size: 1rem;
}
`;

export const EmailInput = styled.input`
margin: auto 0;
border: 0;
border-bottom: 1px solid black;
padding: 0 0.5rem;
box-sizing: border-box;
margin-left: 1.3rem;
font-size: 1.3rem;
flex: 1;
min-width: 100px;
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
overflow: visible;
`;


export const UnderLine = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem 0;
`;


export const MemberListWrapper = styled.div`
width: 100%;
height: 100%;
background-color: #e6e6e64b;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
overflow-x: hidden;
box-sizing: border-box;
padding: 1rem;
& > .classification {
  position: relative;
  margin-right: auto;
  margin-bottom: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #00000033;
  /* text-decoration: underline */
}
@media (max-width: 768px) {
  font-size: 1rem;
}
`;

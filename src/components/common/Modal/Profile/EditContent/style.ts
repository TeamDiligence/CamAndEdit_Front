import styled from "@emotion/styled";

export const Content = styled.div`
z-index: 6;
position: absolute;
height: 100%;
padding: 2rem;
box-sizing: border-box;
width: 30%;
min-width: 300px;
max-width: 450px;
overflow: hidden;
background-color: #f8f8f8;
backdrop-filter: blur(20px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

right: ${({ modalState }: { modalState: boolean }) =>
  modalState ? 0 : "-50%"};
transition: ease 0.3s;
& > div:first-child {
  margin-left: auto;
}
`;

export const Form = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
font-size: 1.2rem;

& > input,
textarea {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
}
`;

export const TextArea = styled.textarea`
border: 0px;
border-radius: 4px 4px 0 0;
border-bottom: 2px solid #c3c3c3;
height: 200px;
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
`;

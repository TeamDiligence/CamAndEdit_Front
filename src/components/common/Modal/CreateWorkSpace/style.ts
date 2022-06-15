import styled from "@emotion/styled";

export const Wrapper = styled.div`
width: 50vw;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex: 1;
`;

export const Text = styled.div`
font-size: 1.3rem;
margin-bottom: 1rem;
`;

export const TitleInput = styled.input`
font-size: 1.3rem;
border: 0;
width: 80%;
border-bottom: 1px solid black;
text-align: center;
&:active {
  /* background-color: black; */
}
&:focus {
  background-color: #eaeaea80;
  border-radius: 5px 5px 0px 0px;
  outline: 0px;
  transition: ease 0.3s;
}
`;

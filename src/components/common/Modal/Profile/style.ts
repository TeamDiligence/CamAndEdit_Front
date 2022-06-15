import styled from "@emotion/styled";


export const Background = styled("div")`
/* z-index: 4; */
position: absolute;
top: 0;
left: 0;
width: 100%;
height: calc(100% - 50px);
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: end;
align-items: center;
display: ${({ modalState }: { modalState: boolean }) =>
  modalState ? "flex" : "none"};
opacity: ${({ modalState }: { modalState: boolean }) =>
  modalState ? 100 : 0};
transition: ease-in-out 0.2s;
`;

export const Content = styled.div`
/* z-index: 6; */
position: absolute;
height: 100%;
padding: 2rem;
box-sizing: border-box;
width: 30%;
min-width: 300px;
max-width: 450px;
/* border: 1px solid #000000; */
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
`;

export const TopBar = styled.div`
width: 100%;
height: 40px;
display: flex;
border-bottom: 1px #000000aa solid;
align-items: center;
justify-content: flex-end;
`;
export const Profile = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 24px;
width: 100%;
height: 50%;
margin-top: 3rem;
background-color: #00000033;
`;
export const Name = styled.div`
position: absolute;
bottom: calc(1.5rem);
right: calc(1.5rem);
padding: 0.5rem 1rem;
font-size: 1.3rem;
font-weight: 500;
background-color: #ffffffaa;
border-radius: 4px;
`;

export const Description = styled.div`
margin-top: 3rem;
`;

export const Email = styled.div`
margin-top: auto;
/* background-color: blue; */
width: 100%;
height: 1rem;
text-align: right;
font-size: 1.3rem;
color: #171717a7;
`;

export const dummyimage =
"https://lh3.googleusercontent.com/a-/AOh14GjVDM2EIhwjQ1bT97w34muz-XlkSPCZEk3jiVjW_Q=s96-c";

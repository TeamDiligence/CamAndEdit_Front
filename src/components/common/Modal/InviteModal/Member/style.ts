import styled from "@emotion/styled";

export const MemberWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: 40px minmax(100px, 200px) 3rem;

justify-content: space-around;
align-items: center;
@media (max-width: 768px) {
  & > img {
    display: none;
  }
  grid-template-columns: minmax(100px, 200px) 3rem;
  grid-column-gap: 8px;
  font-size: 0.8rem;
}
`;
export const MemberText = styled.div`
padding: 0.5rem 0;
margin: auto;
`;
export const InvitedMailText = styled.div`
padding: 0.5rem 0;
margin: auto;
color: #00000066;
`;

export const UnderLine = styled.div`
width: 100%;
border: 1px solid black;
border-radius: 10px;
margin: 1rem 0;
`;

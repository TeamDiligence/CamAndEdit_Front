import styled from "@emotion/styled";

export const Layout = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Wrapper = styled.div`
width: 50%;
min-width: 400px;
height: 50vh;
border: 1px solid #57bfff;
border-radius: 20px;
padding : 0 40px;
box-sizing:border-box; ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
overflow: hidden;
`;

export const LogoWrapper = styled.div`
margin-top:2rem;
`

export const Title = styled.div`
    margin-top:2rem;
    font-size:2rem;
    font-weight: bold;
`
export const Description = styled.div`
    margin-top:1.8rem;
`

export const Hr = styled.hr`
    margin-top:1.3rem;
    border: 0.5px solid black;
    width: 100%;
`
export const Auth = styled.a`
    margin-top: auto;
    margin-bottom : 2rem;
    border-radius: 10px;
    display:flex;
    align-items: center;
    background-color:#4285F4;
    padding:10px;
    color: white;
    font-weight: 500;
    text-decoration: none;
    & > svg {
     border-radius: 50%;
     padding:2px;
     background-color: white ;
     margin-right:10px;
    }

    box-shadow: 2px 2px 4px 1px #8E8E8E;
`

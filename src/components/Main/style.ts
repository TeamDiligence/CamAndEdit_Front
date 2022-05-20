import styled from "@emotion/styled";

export const Wrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
top: 0;
left: 0;
padding: 40px 10vw;
box-sizing: border-box;
overflow:scroll;
`;

export const Title = styled.div`
width:100%;
font-size: 2rem;
font-weight: bold;
`


export const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap : 40px;
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    margin:calc(40px) 0;

`
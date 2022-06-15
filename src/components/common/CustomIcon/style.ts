import styled from "@emotion/styled";


type CustomIconProps = {

    gridColumn?: string;
    onClick?: () => void;
};

type CustomIconImgProps = {
    size?: number;
    width?: number;
    height?: number;
    isButton?:boolean;
}

export const Wrapper = styled('div')<CustomIconProps>`
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: ${props=> props.gridColumn};
`

export const Img = styled('img')<CustomIconImgProps>`
    ${props => props.size && `width:${props.size}px; height:${props.size}px;`}
    ${props =>props.width && `width:${props.width}px;`};
    ${props => props.height && `height:${props.height}px;`}
    ${props => props.isButton &&
    `
    border-radius: 4px;
    padding: 2px;
    box-sizing: border-box;
    &: hover {
        background-color: #d5d5d5a4;
    }
    &: active {
        background-color: #ffffff;
    }
    `}
`
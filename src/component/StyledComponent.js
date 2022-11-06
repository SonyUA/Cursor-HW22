import { css } from "styled-components";
import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    width: 400px;
    margin: 50px auto;
`;
export const LogoCircle = styled.div`
    border-radius: 50px;
    width: 30px;
    height: 30px;
    background-color: #f18fb1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 51px;

    img {
        width: 16px;
    }
    ${(props) =>
        props.primary &&
        css`
            width: 35px;
            height: 35px;
        `}
`;
export const LogoText = styled.span`
    font-size: 17px;
    color: #f9f9f9;
    margin-top: 7px;
    ${(props) =>
        props.primary &&
        css`
            font-size: 19px;
        `}
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input`
    width: 291px;
    height: 41px;
    border-radius: 2px;
    background: transparent;
    border: 1px solid #79797942;
    font-size: 12px;
    font-weight: 600;
    padding-left: 9px;
    margin-top: 19px;
    color: #fff;
    ${(props) =>
        props.litleWidth &&
        css`
            width: 156px;
            height: 47px;
        `}
    ${(props) =>
        props.Width &&
        css`
            width: 325px;
            height: 47px;
            margin-top: 14px;
        `}
`;
export const InputCheckbox = styled.input`
    filter: invert(100%) hue-rotate(675deg) brightness(1.8);
    margin-top: -5px;
`;
export const Label = styled.label`
    color: #979797;
    font-size: 12px;
    margin-left: 9px;
    font-weight: 500;
    margin-top: -5px;
`;
export const FlexBox = styled.div`
    display: flex;
    a {
        font-size: 10px;
        color: #90caf9a3;
        font-weight: 500;
        cursor: pointer;
        margin-top: 13px;
        text-decoration: none;
        ${(props) =>
            props.font &&
            css`
                font-size: 12px;
            `}
    }

    ${(props) =>
        props.spaceBetween &&
        css`
            justify-content: space-between;
        `}
    ${(props) =>
        props.end &&
        css`
            justify-content: end;
        `}
`;
export const Button = styled.button`
    width: 291px;
    height: 28px;
    border-radius: 5px;
    font-size: 11px;
    text-transform: uppercase;
    margin-top: 25px;
    background-color: #90caf9;
    font-weight: 600;
    cursor: pointer;
    ${(props) =>
        props.widthHeight &&
        css`
            width: 329px;
            height: 34px;
        `}
`;
export const Links = styled.a`
    font-size: 10px;
    color: #90caf9a3;
    font-weight: 500;
    cursor: pointer;
    margin-top: 13px;
    ${(props) =>
        props.font &&
        css`
            font-size: 12px;
        `}
`;
export const Copyright = styled.span`
    color: #7b7b7b;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2px;
    margin-top: 48px;
    margin-bottom: 41px;
    text-align: center;
    ${(props) =>
        props.font &&
        css`
            font-size: 12px;
        `}
`;
export const Link = styled.a`
    font-size: 10px;
    color: #90caf9a3;
    font-weight: 500;
    cursor: pointer;
    margin-top: 13px;
    ${(props) =>
        props.font &&
        css`
            font-size: 12px;
        `}
`;

export const Oops = styled.p`
    color: red;
    text-align: center;
    a {
        text-decoration: none;
        color: #fff;
        font-size: 30px;
    }
`;

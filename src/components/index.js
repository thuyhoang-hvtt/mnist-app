import styled from "styled-components";
import { Button, Row, Col, Icon } from "antd";
import Box from './Box';
import Me from './Me';
import Title from "antd/lib/typography/Title";

export const ButtonZ = styled(Button)`
    min-width: 96px;
    background: inherit;
    border: 2px #b768d4 solid;
    color: #b768d4;

    &:focus {
        border: 2px #b768d4 solid;
        color: #b768d4;
        background: inherit;
    }

    &:hover, :active {
        background: #b768d4;
        border: 0px;
        color: #fff;
    }


`;

export const RowZ = styled(Row)`
    margin: 13px 0px;
`;

export const CanvasZ = styled.canvas`
    display: block;
`;

export const ColZ = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

export const Icon32 = styled(Icon)`
    font-size: 32px;
    padding: 5px;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #b768d4;
    }
`;

export const TitleZ = styled(Title)`
    margin-top: 0.5em;
`;

export const Navbar = styled(Row)`
    padding: 10px 0px;
    background-color: #1c1c1c;
    box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.6);
`;


export { Box, Me };



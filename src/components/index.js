import styled from "styled-components";
import { Button, Row, Col, Typography, Icon } from "antd";
import React, { useEffect } from "react";

const { Title } = Typography;


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
    margin: 16px 0px;
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


export const Box = ({ width, height, title, imageUrl, bounding }) => {
    let canvas = React.useRef()
    let ctx = null

    const loadImage = () => {
        // console.log(imageUrl)
        if (imageUrl) {
            const image = new Image();
            image.onload = () => {
                ctx.drawImage(image, 0, 0, width, height);
            }
            image.src = imageUrl
            // console.log(imageUrl)
        }
    }

    const clearCanvas = () => {
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)
    }

    const initContext = () => {
        ctx = canvas.current.getContext('2d')
        clearCanvas();
        loadImage();
    }

    useEffect(() => {
        console.log('[Box] Did Mount')
        initContext();
        return () => {
            console.log('[Box] Will Unmount')
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageUrl])


    return (
        <RowZ>
            <ColZ span={24}>
                <Title level={3}>{title}</Title>
            </ColZ>
            <ColZ span={24}>
                <CanvasZ
                    ref={canvas}
                    width={width}
                    height={height}
                />
            </ColZ>
        </RowZ>
    )
}

export const Icon32 = styled(Icon)`
    font-size: 32px;
    padding: 5px;
    color: #fff;

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






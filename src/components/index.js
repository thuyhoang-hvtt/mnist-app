import styled from "styled-components";
import { Button, Row, Col, Typography, Icon } from "antd";
import React, { useEffect } from "react";
import PropTypes from 'prop-types';

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

        if (imageUrl) {
            const image = new Image();
            image.onload = () => {
                ctx.drawImage(image, 0, 0, width, height);
                if (bounding !== {}) {
                    const { xmin, ymin, xmax, ymax } = bounding
                    const scale = 2;
                    ctx.strokeStyle = 'red';
                    ctx.strokeRect( xmin / 2, ymin / 2, (xmax - xmin + 1) / 2, (ymax - ymin + 1) / 2);
                }
            }
            image.src = imageUrl
            console.log(image)
            console.log(imageUrl)

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

export const Navbar = styled(Row)`
    padding: 10px 0px;
    background-color: #1c1c1c;
    box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.6);
`;






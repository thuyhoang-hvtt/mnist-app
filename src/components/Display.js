import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from "antd"
import { useEffect } from "react"
import { RowZ, ColZ, CanvasZ } from "."

const { Title } = Typography

function Display({ className, width, height, title, imageUrl }) {
    let canvas = null
    let ctx = null

    const loadImage = () => {

        if (imageUrl) {
            const image = new Image();
            image.onload = () => {
                ctx.drawImage(image, 0, 0)
            }

            image.src = imageUrl
        }
    }

    const clearCanvas = () => {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const initContext = () => {
        ctx = canvas.getContext('2d')

        clearCanvas();
        loadImage();
    }

    const setCanvasRef = elt => {
        canvas = elt
    }

    useEffect(() => {
        console.log('[Display] Did Mount')
        initContext();
        return () => {
            console.log('[Display] Will Unmount')
        };
    }, [])


    return (
        <RowZ>
            <ColZ span={24}>
                <Title>{title}</Title>
            </ColZ>
            <ColZ span={24}>
                <CanvasZ
                    innerRef={setCanvasRef}
                    className={className}
                    width={width}
                    height={height}
                />
            </ColZ>
        </RowZ>
    )
}

// eslint-disable-next-line react/no-typos
Display.PropTypes = {
    imageUrl: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string.isRequired,
}

export default Display;
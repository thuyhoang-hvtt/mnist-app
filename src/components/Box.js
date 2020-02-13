import React, { useEffect } from 'react'
import { RowZ, ColZ, CanvasZ } from '.';
import Title from 'antd/lib/typography/Title';


export default function Box ({ width, height, title, imageUrl, bounding }) {
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
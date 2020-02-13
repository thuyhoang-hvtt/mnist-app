/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addInput } from '../redux/actions/PipelineAction';
import { addStroke, addStrokePos, endStroke } from '../redux/actions/DrawingAction';
import { RowZ, ColZ } from '../components';

const Canvas = styled.canvas`
    width: 300px;
    height: 300px;
    border-radius: 5px; 
    
    display: block;
    touch-action: none;

    &:hover {
        box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
    }
`;

function DrawingCanvas() {

    const { isDrawing, isEndStroke, strokes } = useSelector(state => state.drawing)
    
    const dispatch = useDispatch()

    let ctx = {}
    let canvas = React.useRef()


    const initContext = () => {
        ctx = canvas.current.getContext('2d')
        ctx.lineWidth = 10
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'white'
        ctx.fillStyle = 'dark'

        clearCanvas()
    }

    const clearCanvas = () => {
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)
    }

    const drawStrokes = () => strokes.forEach(points => {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach(point => ctx.lineTo(point.x, point.y))
        ctx.stroke();
    })

    const computeMousePos = e => ({
        x: computeMousePosX(e),
        y: computeMousePosY(e),
    })

    const computeMousePosX = e => {
        const rect = canvas.current.getBoundingClientRect();
        const scaleX = canvas.current.width / rect.width;

        return (e.clientX - rect.left) * scaleX;
    }

    const computeMousePosY = e => {
        const rect = canvas.current.getBoundingClientRect();
        const scaleY = canvas.current.height / rect.height;

        return (e.clientY - rect.top) * scaleY;
    } 
    

    const onMouseDown = e => {
        dispatch(addStroke(computeMousePos(e)))
    }

    const onMouseMove = e => {
        if (!isDrawing) return;

        dispatch(addStrokePos(computeMousePos(e)))
    }

    const onStrokeEnd = () => {
        if (isDrawing) dispatch(endStroke());
    }


    useEffect(() => {
        console.log('[Drawing] Did Mount')
        initContext();
        return () => {
            console.log('[DrawingCanvas] Will Unmount')
        };
    }, [])

    useEffect(() => {
        initContext();
        drawStrokes();
        if (isEndStroke) {
            console.log('Generate Image!')
            dispatch(addInput(ctx.getImageData(0, 0, 280, 280)));
            // dispatch(displayBoundingBox(processingBounding(ctx.getImageData(0, 0, 280, 280))));

        }
        // console.log('[Drawing] Did Update')
    }, [isEndStroke, isDrawing, ctx, dispatch])


    return (
        <RowZ type="flex" justify="center" align="center">
            <ColZ span={24}>
                <Canvas
                    ref={canvas}
                    onPointerDown={onMouseDown}
                    onPointerMove={onMouseMove}
                    onPointerUp={onStrokeEnd}
                    onMouseLeave={onStrokeEnd}
                    width={280}
                    height={280}
                />
            </ColZ>
        </RowZ>
    )
}


export default DrawingCanvas

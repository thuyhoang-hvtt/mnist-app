/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RowZ, ColZ, Box } from '../components'
import { displayBoundingBox, displayCroppedBox, displayCenteredBox, displayNormalizedBox } from '../redux/actions/PipelineAction'
import { processingBounding, processingCropped, processingCentered, processingNormalized } from '../utils/image-processing'

export default function ImagePipeline() {
    const { imageData, imageUrl, bounding, croppedUrl, centeredUrl, normalizedUrl } = useSelector(state => state.pipeline)
    const dispatch = useDispatch()
    
    const [data, setData] = useState({});

    useEffect(() => {
        if (imageData) dispatch(displayBoundingBox(processingBounding(imageData)))
        return () => {
            console.log('BoundingBox Will Unmount')
        };
    }, [imageData])


    useEffect(() => {
        if (imageUrl) {
            const { croppedCanvas, croppedRectSize } = processingCropped(imageData, bounding);
            dispatch(displayCroppedBox(croppedCanvas.toDataURL()))
            setData({...data, croppedCanvas, croppedRectSize})
        }
        return () => {
            console.log('CroppedBox Will Unmount')
        };
    }, [imageUrl])

    useEffect(() => {
        if (croppedUrl) {
            const { croppedCanvas, croppedRectSize } = data;
            const centeredCanvas = processingCentered(croppedCanvas, croppedRectSize);
            dispatch(displayCenteredBox(centeredCanvas.toDataURL()))
            setData({...data, centeredCanvas})
        }

        return () => {
            console.log('CenteredBox Will Unmount')
        };
    }, [croppedUrl])
    
    useEffect(() => {
        if (centeredUrl) {
            const { centeredCanvas } = data
            const normalizedCanvas = processingNormalized(centeredCanvas)
            dispatch(displayNormalizedBox(normalizedCanvas.toDataURL()))
            // console.log(normalizedCanvas.toDataURL())
        }
        return () => {
            console.log('NormalizedBox Will Unmount')
        };
    }, [centeredUrl])


    return (
        <RowZ type="flex" justify="center" align="middle">
            <ColZ span={4}>
                <Box
                    width={140}
                    height={140}
                    imageUrl={imageUrl}
                    bounding={bounding}
                    title='Bounding Box'
                />
            </ColZ> 
            <ColZ span={4}>
                <Box
                    width={100}
                    height={100}
                    imageUrl={croppedUrl}
                    title='Cropped Box'
                />
            </ColZ> 
            <ColZ span={4}>
                <Box
                    width={140}
                    height={140}
                    imageUrl={centeredUrl}
                    title='Centered Box'
                />
            </ColZ> 
            <ColZ span={4}>
                <Box
                    width={28}
                    height={28}
                    imageUrl={normalizedUrl}
                    title='Normalized Box'
                />
            </ColZ> 
        </RowZ>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { RowZ, ColZ, Box } from '../components'

export default function ImagePipeline() {
    const { imageUrl, bounding, croppedUrl, centeredUrl, normalizedUrl } = useSelector(state => state.pipeline)

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

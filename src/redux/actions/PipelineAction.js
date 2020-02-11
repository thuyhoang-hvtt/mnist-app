export const PipelineAction = {
    INPUT: 'INPUT',
    RESET: 'RESET',
    DISPLAY_BOUNDING_BOX: 'DISPLAY_BOUNDING_BOX',
    DISPLAY_CROPPED_BOX: 'DISPLAY_CROPPED_BOX',
    DISPLAY_CENTERED_BOX: 'DISPLAY_CENTERED_BOX',
    DISPLAY_NORMALIZED_BOX: 'DISPLAY_NORMALIZED_BOX'
}

export const addInput = imageData => ({
    type: PipelineAction.INPUT,
    imageData
})

export const resetInput = () => ({
    type: PipelineAction.RESET
})

export const displayBoundingBox = ({imageUrl, bounding}) => ({
    type: PipelineAction.DISPLAY_BOUNDING_BOX,
    imageUrl,
    bounding
})

export const displayCroppedBox = croppedUrl => ({
    type: PipelineAction.DISPLAY_CROPPED_BOX,
    croppedUrl
})

export const displayCenteredBox = centeredUrl => ({
    type: PipelineAction.DISPLAY_CENTERED_BOX,
    centeredUrl
})

export const displayNormalizedBox = normalizedUrl => ({
    type: PipelineAction.DISPLAY_NORMALIZED_BOX,
    normalizedUrl
})
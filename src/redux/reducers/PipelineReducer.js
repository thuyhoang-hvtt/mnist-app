import { PipelineAction } from '../actions/PipelineAction'


const initState = {
    imageData: null,
    imageUrl: '',
    bounding: null,
    croppedUrl: '',
    centeredUrl: '',
    normalizedUrl: ''
}


const pipeline = (state = initState, action) => {
    switch (action.type) {
        case PipelineAction.INPUT:
            return {
                ...state,
                imageData: action.imageData
            }
        case PipelineAction.DISPLAY_BOUNDING_BOX:
            return {
                ...state,
                imageUrl: action.imageUrl,
                bounding: action.bounding
            }
        case PipelineAction.DISPLAY_CROPPED_BOX:
            return {
                ...state,
                croppedUrl: action.croppedUrl,
            }
        case PipelineAction.DISPLAY_CENTERED_BOX:
            return {
                ...state,
                centeredUrl: action.centeredUrl,
            }
        case PipelineAction.DISPLAY_NORMALIZED_BOX:
            return {
                ...state,
                normalizedUrl: action.normalizedUrl,
            }
        case PipelineAction.RESET:
            return initState
        default:
            return state
    }
}

export default pipeline;
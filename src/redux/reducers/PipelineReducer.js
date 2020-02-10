import { PipelineAction } from '../actions/PipelineAction'
import { computeBoundingBox } from '../../utils/image-processing'


const initState = {
    imageData: {},
    imageUrl: '',
    bounding: {},
    croppedUrl: '',
    centeredUrl: '',
    normalizedUrl: ''
}


const pipeline = (state = initState, action) => {
    switch (action.type) {
        case PipelineAction.DISPLAY_BOUNDING_BOX:
            return {
                ...state,
                imageData: action.imageData,
                imageUrl: action.imageUrl,
                bounding: computeBoundingBox(action.imageData)
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
import {
    MnistAction
} from '../actions/MnistAction'


const initState = {
    status: MnistAction.INIT,
    prediction: {}
}

const mnist = (state = initState, action) => {
    switch (action.type) {
        case MnistAction.PREDICT_REQUESTED:
            return {
                ...state,
                status: MnistAction.PREDICT_REQUESTED,
            }
            case MnistAction.PREDICT_SUCCEEDED:
                return {
                    ...state,
                    status: MnistAction.PREDICT_SUCCEEDED,
                        prediction: action.prediction,
                }
                case MnistAction.RESET:
                    return initState
                default:
                    return state
    }
}

export default mnist;
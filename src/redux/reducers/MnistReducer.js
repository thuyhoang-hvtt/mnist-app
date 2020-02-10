import { MnistAction } from '../actions/MnistAction'


const initState = {
    status: MnistAction.INIT,
    retrainStatus: MnistAction.INIT
}

const mnist = (state = initState, action) => {
    switch (action.type) {
        case MnistAction.LOAD_PRETRAINED_MODEL_SUCCEEDED:
            return {
                ...state,
                status: MnistAction.LOAD_PRETRAINED_MODEL_SUCCEEDED,
            }
        case MnistAction.LOADING_MNIST:
        case MnistAction.TRAINING_MNSIT:
        case MnistAction.LOAD_AND_TRAIN_MNIST_SUCCEEDED:
            return {
                ...state,
                retrainStatus: action.type,
            }
        case MnistAction.PREDICT_REQUESTED:
            return {
                ...state,
                image: action.image,
            }
        case MnistAction.PREDICT_SUCCEEDED:
            return {
                ...state,
                prediction: action.prediction,
            }
        default:
            return state
    }
}

export default mnist;
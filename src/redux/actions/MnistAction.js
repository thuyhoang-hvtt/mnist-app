export const MnistAction = {
    INIT: 'INIT',
    LOAD_PRETRAINED_MODEL_SUCCEEDED: 'LOAD_PRETRAINED_MODEL_SUCCEEDED',
    LOAD_AND_TRAIN_MNIST_REQUESTED: 'LOAD_AND_TRAIN_MNIST_REQUESTED',
    LOADING_MNIST: 'LOADING_MNIST',
    TRAINING_MNSIT: 'TRAINING_MNSIT',
    LOAD_AND_TRAIN_MNIST_SUCCEEDED: 'LOAD_AND_TRAIN_MNIST_SUCCEEDED',
    PREDICT_REQUESTED: 'PREDICT_REQUESTED',
    PREDICT_SUCCEEDED: 'PREDICT_SUCCEEDED',
}

export const loadPretrainedModelSucceeded = () => ({
    type: MnistAction.LOAD_PRETRAINED_MODEL_SUCCEEDED,
})

export const loadAndTrainMnist = () => ({
    type: MnistAction.LOAD_AND_TRAIN_MNIST_REQUESTED
})

export const loadAndTrainMnistSucceeded = () => ({
    type: MnistAction.LOAD_PRETRAINED_MODEL_SUCCEEDED,
})

export const loadingMnist = () => ({
    type: MnistAction.LOADING_MNIST
})

export const trainingMnist = () => ({
    type: MnistAction.TRAINING_MNSIT
})

export const predict = image => ({
    type: MnistAction.PREDICT_REQUESTED,
    image,
})

export const predictSucceeded = prediction => ({
    type: MnistAction.PREDICT_SUCCEEDED,
    prediction,
})

export const MnistAction = {
    INIT: 'INIT',
    PREDICT_REQUESTED: 'PREDICT_REQUESTED',
    PREDICT_SUCCEEDED: 'PREDICT_SUCCEEDED',
    RESET: 'RESET'
}

export const predictRequested = () => ({
    type: MnistAction.PREDICT_REQUESTED,
})

export const predictSucceeded = prediction => ({
    type: MnistAction.PREDICT_SUCCEEDED,
    prediction,
})

export const resetMnist = () => ({
    type: MnistAction.RESET,
})

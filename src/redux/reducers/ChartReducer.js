import { ChartAction } from "../actions/ChartAction"

const initState = {
    loss: [],
    accuracy: []
}

const chart = (state = initState, action) => {
    switch (action.type) {
        case ChartAction.ADD_LOSS_POINT:
            return {
                ...state,
                loss: [...state.loss, action.pt]
            }
        case ChartAction.ADD_ACCURACY_POINT:
            return {
                ...state,
                accuracy: [...state.accuracy, action.pt]
            }
        case ChartAction.RESET_CHART:
            return initState
        default:
            return state
    }
};


export default chart;
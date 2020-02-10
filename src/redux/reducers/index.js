import { combineReducers } from "redux";
import drawing from './ChartReducer';
import chart from './DrawingReducer';
import pipeline from './PipelineReducer';
import mnist from './MnistReducer';



export default combineReducers({
    drawing,
    chart,
    pipeline,
    mnist
});
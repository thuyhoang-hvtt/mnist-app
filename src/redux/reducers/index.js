import { combineReducers } from "redux";
import drawing from './DrawingReducer';
import chart from './ChartReducer';
import pipeline from './PipelineReducer';
import mnist from './MnistReducer';



export default combineReducers({
    drawing,
    chart,
    pipeline,
    mnist
});
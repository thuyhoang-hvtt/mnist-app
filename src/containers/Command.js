import React from 'react'
import { RowZ, ButtonZ, ColZ } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { resetDrawing } from '../redux/actions/DrawingAction'
import { resetInput } from '../redux/actions/PipelineAction'

import API from '../utils/api'
import { predictSucceeded, predictRequested, resetMnist } from '../redux/actions/MnistAction'

function Command() {
    const dispatch = useDispatch()
    const { normalizedUrl } = useSelector(state => state.pipeline)


    const predictRequest = async event => {
        event.preventDefault();
        let response;
        dispatch(predictRequested())
        try {
            response = await API.post(`predict`, normalizedUrl);
            // console.log(response)
            if (response.status === 200) {
                dispatch(predictSucceeded(response.data))
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <RowZ type="flex" justify="center">
            <ColZ span={3}>
                <ButtonZ 
                    disabled={normalizedUrl === ''}
                    onClick={predictRequest}
                >Predict</ButtonZ>
            </ColZ>
            <ColZ span={3}>
                <ButtonZ
                    onClick={() => dispatch(resetDrawing()) && dispatch(resetInput()) && dispatch(resetMnist())}
                >Clear</ButtonZ>
            </ColZ>
        </RowZ>
    )
}

export default Command

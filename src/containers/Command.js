import React from 'react'
import { RowZ, ButtonZ, ColZ } from '../components'
import { useDispatch } from 'react-redux'
import { resetDrawing } from '../redux/actions/DrawingAction'
import { resetInput } from '../redux/actions/PipelineAction'

function Command() {
    const dispatch = useDispatch()
    return (
        <RowZ type="flex" justify="center">
            <ColZ 
                span={3}
                onClick={() => console.log('Predict')}
            >
                <ButtonZ 
                    // disabled={imageData !== {}}
                    // onClick={}
                >Predict</ButtonZ>
            </ColZ>
            <ColZ 
                span={3}
                onClick={() => dispatch(resetDrawing()) && dispatch(resetInput())}
            >
                <ButtonZ>Clear</ButtonZ>
            </ColZ>
        </RowZ>
    )
}

export default Command

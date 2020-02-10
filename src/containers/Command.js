import React from 'react'
import { RowZ, ButtonZ, ColZ } from '../components'
import { useSelector, useDispatch } from 'react-redux'

function Command() {

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
                onClick={() => console.log('Clear..')}
            >
                <ButtonZ>Clear</ButtonZ>
            </ColZ>
        </RowZ>
    )
}

export default Command

import React from 'react'
import { ColZ, TitleZ } from '.'
import styled from 'styled-components'
import { Row, Spin } from 'antd'
import { useSelector } from 'react-redux';
import { MnistAction } from '../redux/actions/MnistAction';


const ResultWrapper = styled(Row)`
    margin-top: 20px;
    min-height: 84px;
`;

function Result() {
    const { status, prediction } = useSelector(state => state.mnist)

    return (
        <ResultWrapper type="flex" justify="center" align="middle">
            <ColZ span={4}>
                <Spin spinning={status === MnistAction.PREDICT_REQUESTED}>
                    <TitleZ copyable={false} editable={false}>{prediction < 0 ? '' : prediction}</TitleZ>
                </Spin>
            </ColZ>
        </ResultWrapper>
    )
}

export default Result

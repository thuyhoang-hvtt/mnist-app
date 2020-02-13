import React from 'react'
import { ColZ, TitleZ } from '.'
import styled from 'styled-components'
import { Row, Spin } from 'antd'
import { useSelector } from 'react-redux';
import { MnistAction } from '../redux/actions/MnistAction';


const ResultWrapper = styled(Row)`
    margin-top: 10px;
    min-height: 84px;
`;

function Result() {
    const { status, prediction } = useSelector(state => state.mnist)
    const { result } = prediction;
    return (
        <ResultWrapper type="flex" justify="center" align="middle">
            <ColZ span={24}>
                <Spin spinning={status === MnistAction.PREDICT_REQUESTED}>
                    <TitleZ copyable={false} editable={false}>{result ? result : ''}</TitleZ>
                </Spin>
            </ColZ>
        </ResultWrapper>
    )
}

export default Result

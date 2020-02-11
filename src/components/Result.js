import React from 'react'
import { ColZ, TitleZ } from '.'
import styled from 'styled-components'
import { Row, Spin } from 'antd'


const ResultWrapper = styled(Row)`
    margin-top: 24px;
    min-height: 64px;
`;

function Result({ result }) {
    return (
        <ResultWrapper type="flex" justify="center" align="middle">
            <ColZ span={4}>
                <Spin spinning={result === -1}>
                    <TitleZ copyable={false} editable={false}>{result}</TitleZ>
                </Spin>
            </ColZ>
        </ResultWrapper>
    )
}

export default Result

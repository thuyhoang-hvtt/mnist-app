import React from 'react'
import { BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell } from 'recharts';

import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { useSelector } from 'react-redux';

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => `
    M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
    Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
    

const initData = [...Array(10).keys()].map(value => ({ digit: value, probability: 0.0}))

const MnistChart = () => {
    const { statistic } = useSelector(state => state.mnist.prediction)

    const generateData = () => {
        return statistic.map((value, index) => ({ digit: index, probability: (value * 100).toPrecision(3) }))
    } 

    return (
        <BarChart
            width={600}
            height={400}
            data={statistic ? generateData() : initData}
            margin={{top: 20, right: 10, left: 10, bottom: 5}}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="digit" domain={[0, 100]}/>
            <YAxis />
            <Bar dataKey="probability" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {
                statistic && statistic.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))
            }
            </Bar>
        </BarChart>
    )
}

export default MnistChart

import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DrawingCanvas from './containers/DrawingCanvas';
import { Layout, Typography } from 'antd'
import { Icon32, Navbar, RowZ, ColZ } from './components';
import Command from './containers/Command';
import ImagePipeline from './containers/ImagePipeline';

const { Footer } = Layout;
const { Text, Title, Paragraph } = Typography;

function App() {
	// const mnist = useSelector(state => state.mnist);

	// useEffect(() => {
	//   console.log('App Did Mount')
	//   console.log(mnist)
	//   return () => {
	//     console.log('App Will Unmount')
	//   };
	// }, [mnist])

	return (
		<Layout >
			<Navbar type="flex" justify="space-between" align="middle">
				<ColZ span={2}><Icon32 type="menu"/></ColZ>
				<ColZ span={6}/>
				<ColZ span={8}><Title code style={{ margin: 'auto', color: 'white', fontSize: 32}}>Hand Digit Recognition</Title></ColZ>
				<ColZ span={6}/>
				<ColZ span={1}><Icon32 type="github"/></ColZ>
				<ColZ span={1}><Icon32 type="youtube"/></ColZ>
			</Navbar>
			<RowZ type="flex" justify="center" align="middle">
				<ColZ span={24}>
					<DrawingCanvas/>
				</ColZ>
			</RowZ>
			<Command/>
			<ImagePipeline/>
			<Footer style={{ textAlign: 'center'}}>Hand Digit Recognition ©2020 Created by Trong Thuy</Footer>
		</Layout>
	);
}

export default App;

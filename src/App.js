import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import DrawingCanvas from './containers/DrawingCanvas';
import { Layout, Typography, Col, Drawer } from 'antd'
import { Icon32, Navbar, RowZ, ColZ, Me } from './components';
import Command from './containers/Command';
import ImagePipeline from './containers/ImagePipeline';
import Result from './components/Result';
import MnistChart from './containers/MnistChart';

const { Footer } = Layout;
const { Title} = Typography;

function App() {
	const [openDrawer, setOpenDrawer] = useState(false)

	useEffect(() => {
	  console.log('App Did Mount')
	  return () => {
	    console.log('App Will Unmount')
	  };
	}, [])

	return (
		<Layout >
			<Drawer
				width={400}
				placement="left"
				closable={false}
				onClose={() => setOpenDrawer(false)}
				visible={openDrawer}
			>
				<Me/>
			</Drawer>
			<Navbar type="flex" justify="space-between" align="middle">
				<ColZ span={2}><Icon32 onClick={() => setOpenDrawer(true)} type="menu"/></ColZ>
				<ColZ span={6}/>
				<ColZ span={8}><Title code style={{ margin: 'auto', color: 'white', fontSize: 32}}>Hand Digit Recognition</Title></ColZ>
				<ColZ span={6}/>
				<ColZ span={1}><Icon32 type="github"/></ColZ>
				<ColZ span={1}><Icon32 type="youtube"/></ColZ>
			</Navbar>
			<RowZ type="flex" justify="center" align="bottom">
				<Col span={8}>
					<Result/>
					<DrawingCanvas/>
				</Col>
				<ColZ span={12}>
					<MnistChart/>
				</ColZ>
			</RowZ>
			<Command/>
			<ImagePipeline/>
			<Footer style={{ textAlign: 'center'}}>Hand Digit Recognition ©2020 Created by Trong Thuy</Footer>
		</Layout>
	);
}

export default App;

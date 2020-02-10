import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import DrawingCanvas from './containers/DrawingCanvas';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DrawingCanvas/>
    </div>
  );
}

export default App;

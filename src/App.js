import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MainArea from './MainArea';
import MenuBar from './MenuBar';


function App() {
  

  return (
    <div className="App">
      <MenuBar />
      <MainArea />
    </div>
  );
}

export default App;

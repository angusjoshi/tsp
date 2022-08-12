import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MainArea from './MainArea';
import MenuBar from './MenuBar';


function App() {
  const [circles, setCircles] = useState([]);
  const [nextId, setNextId] = useState(0);

  const handleClick = event => { 
    setCircles([...circles, {
        pos: getMousePos(event),
        key: nextId,
    }]);
    setNextId(nextId + 1);
    console.log("asdf")
  };
  const getMousePos = event => ({
    x: event.clientX - event.currentTarget.offsetLeft,
    y: event.clientY - event.currentTarget.offsetTop,
  });

  return (
    <div className="App">
      <MenuBar />
      <MainArea handleClick={handleClick} circles={circles}/>
    </div>
  );
}

export default App;

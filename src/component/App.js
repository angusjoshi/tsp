import './App.css';
import React, {useState} from 'react';
import MainArea from './MainArea';
import MenuBar from './MenuBar';


function App() {
  const [circles, setCircles] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [path, setPath] = useState([]);


  const handleMainAreaClick = event => { 
    setCircles([...circles, {
        pos: getMousePos(event),
    }]);
    setNextId(nextId + 1);
  };
  const getMousePos = event => ({
    x: event.clientX - event.currentTarget.offsetLeft,
    y: event.clientY - event.currentTarget.offsetTop,
  });
  const clear = () => {
    setCircles([]);
  }
  const findPath = () => { 
    
  }
  return (
    <div className="App">
      <MenuBar clear={clear} findPath={findPath}/>
      <MainArea handleClick={handleMainAreaClick} circles={circles}/>
    </div>
  );
}

export default App;

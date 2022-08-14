import './App.css';
import React, {useState} from 'react';
import MainArea from './MainArea';
import MenuBar from './MenuBar';
import { nearestNeighbor, swapHeuristic, twoOptHeuristic } from '../logic/FindPath';


function App() {
  const [circles, setCircles] = useState([]);
  const [path, setPath] = useState([]);

  const handleMainAreaClick = event => { 
    setPath([...path, circles.length]);
    setCircles([...circles, getMousePos(event)]);
  };
  const getMousePos = event => ({
    x: event.clientX - event.currentTarget.offsetLeft,
    y: event.clientY - event.currentTarget.offsetTop,
  });
  const clear = () => {
    setCircles(circles => []);
    setPath(path => []);
  }
  const findPath = () => { 
    setPath(twoOptHeuristic(circles));
  }
  return (
    <div className="App">
      <MenuBar clear={clear} findPath={findPath}/>
      <MainArea handleClick={handleMainAreaClick} circles={circles}
        path={path}/>
    </div>
  );
}

export default App;

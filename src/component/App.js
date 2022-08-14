import './App.css';
import React, {useState} from 'react';
import MainArea from './MainArea';
import MenuBar from './MenuBar';
import { nearestNeighbor, swapHeuristic, twoOptHeuristic } from '../logic/FindPath';


function App() {
  const [circles, setCircles] = useState([]);
  const [path, setPath] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState("twoOpt");
  const availAlgos = ["twoOpt", "swap", "nearestNeighbor"];

  const handleMainAreaClick = event => { 
    // setPath([...path, circles.length]);
    setCircles([...circles, getMousePos(event)]);
  };
  const getMousePos = event => ({
    x: event.clientX - event.currentTarget.offsetLeft,
    y: event.clientY - event.currentTarget.offsetTop,
  });
  const clear = () => {
    setCircles([]);
    setPath([]);
  }
  const findPath = () => { 
    if(selectedAlgo === "twoOpt"){
      setPath(twoOptHeuristic(circles));
      return;
    }
    if(selectedAlgo === "swap") { 
      setPath(swapHeuristic(circles));
      return;
    }
    if(selectedAlgo === "nearestNeighbor") { 
      setPath(nearestNeighbor(circles));
      return;
    }
  }
  const handleDropdownClick = newAlgo => {
    setSelectedAlgo(newAlgo);
  }
  return (
    <div className="App">
      <MenuBar clear={clear} findPath={findPath} algorithms={availAlgos} selectedAlgo={selectedAlgo} handleDropdownClick={handleDropdownClick} />
      <MainArea handleClick={handleMainAreaClick} circles={circles}
        path={path}/>
    </div>
  );
}

export default App;

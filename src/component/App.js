import "./App.css";
import React, { useState } from "react";
import MainArea from "./MainArea";
import MenuBar from "./MenuBar";
import Slider from "./Slider";
import {
  nearestNeighbor,
  swapHeuristic,
  twoOptHeuristic,
} from "../logic/FindPath";

function App() {
  const [circles, setCircles] = useState([]);
  const [path, setPath] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState("twoOpt");
  const [pathFinding, setPathFinding] = useState(false);
  const availAlgos = ["twoOpt", "swap", "nearestNeighbor"];

  const handleMainAreaClick = (event) => {
    // setPath([...path, circles.length]);
    if(!pathFinding) { 
      setCircles([...circles, getMousePos(event)]);
    }
  };
  const getMousePos = (event) => ({
    x: event.clientX - event.currentTarget.offsetLeft,
    y: event.clientY - event.currentTarget.offsetTop,
  });
  const clear = () => {
    setCircles([]);
    setPath([]);
  };
  const findPath = async () => {
    setPathFinding(true);
    if (selectedAlgo === "twoOpt") {
      await twoOptHeuristic(circles, setPath);
    }
    else if (selectedAlgo === "swap") {
      await swapHeuristic(circles, setPath);
    }
    else if (selectedAlgo === "nearestNeighbor") {
      await nearestNeighbor(circles, setPath);
    }
    setPathFinding(false);
  };
  const handleDropdownClick = (newAlgo) => {
    setSelectedAlgo(newAlgo);
  };
  return (
    <div className="App">
      <MenuBar
        clear={clear}
        findPath={findPath}
        algorithms={availAlgos}
        selectedAlgo={selectedAlgo}
        handleDropdownClick={handleDropdownClick}
        pathFinding={pathFinding}
      />
      <MainArea
        handleClick={handleMainAreaClick}
        circles={circles}
        path={path}
        
      />
    </div>
  );
}

export default App;

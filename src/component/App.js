import "./App.css";
import React, { useCallback, useState } from "react";
import MainArea from "./MainArea";
import MenuBar from "./MenuBar";
import {
  nearestNeighbor,
  swapHeuristic,
  twoOptHeuristic,
  tourValue,
} from "../logic/FindPath";

function App() {
  const [circles, setCircles] = useState([]);
  const [path, setPath] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState("twoOpt");
  const [pathFinding, setPathFinding] = useState(false);
  const [pathSpeed, setPathSpeed] = useState(5);
  const availAlgos = ["twoOpt", "nearestNeighbor"];
  const pathLength = useCallback(() => tourValue(circles, path), [path])
  const handleSliderChange  = event => {
    setPathSpeed(event.target.valueAsNumber);
  }
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
      await twoOptHeuristic(circles, setPath, pathSpeed);
    }
    else if (selectedAlgo === "swap") {
      await swapHeuristic(circles, setPath, pathSpeed);
    }
    else if (selectedAlgo === "nearestNeighbor") {
      await nearestNeighbor(circles, setPath, pathSpeed);
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
        handleSliderChange={handleSliderChange}
        pathLength={pathLength()}
        nNodes={circles.length}
      />
      <MainArea
        handleClick={handleMainAreaClick}
        circles={circles}
        path={path}
        drawLastLine={!(pathFinding && selectedAlgo == "nearestNeighbor")}
        
      />
    </div>
  );
}

export default App;

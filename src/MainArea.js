import React, {useState} from 'react'
import Circle from './Circle';
import './MainArea.css'
function MainArea() { 
const [circles, setCircles] = useState([]);
const [nextId, setNextId] = useState(0);
const [mousePos, setMousePos] = useState({x: 0, y:0,});
const handleClick = event => { 
    console.log(event.clientX);
    console.log(event.clientY);
    setCircles([...circles, {
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop,
        key: nextId,
    }]);
    setNextId(nextId + 1);
    
};
const getMousePos = event => ({
    x: event.clientX - event.target.offsetLeft,
    y: event.clientY - event.target.offsetTop,
});
const handleMouseMove = event => { 
    setMousePos(getMousePos(event));
}
const handleMouseEnter = () => { 
    console.log("entered");
}
const handleMouseLeave = () => { 
    console.log("left");
}
const genCircleComponents = () => circles.map( circle => 
    <Circle x={circle.x} y={circle.y} key={circle.key} />
);
    return (
        <div className="main-area" onClick={handleClick} onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {genCircleComponents()}
            <Circle ghost={true} x={mousePos.x} y={mousePos.y}/>
            
        </div>
    );
}
export default MainArea;
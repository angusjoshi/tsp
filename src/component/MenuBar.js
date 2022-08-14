import React from 'react'
import Button from './Button'
import Slider from './Slider';
import './MenuBar.css'
import Dropdown from './Dropdown';

function MenuBar(props) {
    const dummyFunc = () => {
        console.log("dummy");
    } 
    return (
        <div className="menu-bar">
            <Button onClick={props.clear} text={"clear"} disable={props.pathFinding} />
            <Button onClick={props.findPath} text={"find path"} disable={props.pathFinding} />
            <Slider handleChange={props.handleSliderChange} />
            <Dropdown algorithms={props.algorithms} selectedAlgo={props.selectedAlgo} handleDropdownClick={props.handleDropdownClick} disable={props.pathFinding}/>
        </div>
        
    );
}

export default MenuBar;
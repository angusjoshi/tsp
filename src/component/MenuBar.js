import React from 'react'
import Button from './Button'
import Slider from './Slider';
import Stats from './Stats'
import './MenuBar.css'
import Dropdown from './Dropdown';
import GHLink from './GHLink'

function MenuBar(props) {
    return (
        <div className="menu-bar">
            <Button className="clear-button" onClick={props.clear} text={"clear"} disable={props.pathFinding} />
            <Button className="find-path-button" onClick={props.findPath} text={"find path"} disable={props.pathFinding} />
            <Slider className="slider" handleChange={props.handleSliderChange} />
            <Stats pathLength={props.pathLength} nNodes={props.nNodes}/>
            <GHLink link="https://github.com/angusjoshi1/tsp"/>
            <Dropdown className="dropdown" algorithms={props.algorithms} selectedAlgo={props.selectedAlgo} handleDropdownClick={props.handleDropdownClick} disable={props.pathFinding}/>

        </div>
        
    );
}

export default MenuBar;
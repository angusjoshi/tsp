import React from 'react'
import Button from './Button'
import './MenuBar.css'
import Dropdown from './Dropdown';

function MenuBar(props) {
    const dummyFunc = () => {
        console.log("dummy");
    } 
    return (
        <div className="menu-bar">
            <Button onClick={props.clear} text={"clear"}/>
            <Button onClick={props.findPath} text={"find path"} />
            <Dropdown algorithms={props.algorithms} selectedAlgo={props.selectedAlgo} handleDropdownClick={props.handleDropdownClick}/>
        </div>
        
    );
}

export default MenuBar;
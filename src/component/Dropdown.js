import React from 'react';
import './Dropdown.css';
import Button from './Button';

function Dropdown(props) { 
    //assume we have props.algorithms : [{name, onclick}]
    //and props.selectedAlgo
    const genButtons = () => { 
        return props.algorithms.map(algo => (
            <button key={algo} onClick={() => props.handleDropdownClick(algo)}>{algo}</button>
        )
        )
    }
    return (
        <div className="dropdown">
            <button className="dropdown-button">{props.selectedAlgo}</button>
            <div className="dropdown-content">
                {genButtons()}
            </div>
        </div>
    );
}
export default Dropdown;
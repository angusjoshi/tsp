import React from 'react'
import Button from './Button'
import './MenuBar.css'

function MenuBar(props) { 

    return (
        <div className="menu-bar">
            <Button onClick={props.clear} text={"clear"}/>
            <Button onClick={props.findPath} text={"find path"} />
        </div>
        
    );
}

export default MenuBar;
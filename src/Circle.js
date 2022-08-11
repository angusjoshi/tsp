import React from 'react';
import './Circle.css'

function Circle (props) { 
    const style = () => { 
        return { 
                top: props.y,
                left: props.x,
        };
        
    }
    return (
        <div className={`node  ${props.ghost ? "ghost" : ""}`} style={style()}></div>
    );
}
export default Circle;
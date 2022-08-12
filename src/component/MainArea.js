import React, {useEffect, useState, useRef, useCallback} from 'react'
import Canvas from './Canvas'
import './MainArea.css'
function MainArea(props) { 
    
    
    
    const draw = context => {
        context.fillStyle = '#000000'
        for(let i = 0; i < props.circles.length; i++) {
            
            context.beginPath()
            context.arc(props.circles[i].pos.x, props.circles[i].pos.y, 20, 0, 2*Math.PI)
            context.fill()
        }
        if(props.circles.length > 2) { 
            context.moveTo(props.circles[0].pos.x, props.circles[0].pos.y);
            context.lineTo(props.circles[1].pos.x, props.circles[1].pos.y);
            context.stroke();

        }
    }
   
        return (
            <div className="main-area" onClick={props.handleClick}>
                    <Canvas draw={draw}/>
            </div>
        );
}
export default MainArea;
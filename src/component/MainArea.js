import Canvas from './Canvas'
import Slider from './Slider';

import './MainArea.css'
function MainArea(props) { 
    const getX = i => props.circles[i].x;
    const getY = i => props.circles[i].y;
    const drawCircles = context => {
        
        for(let i = 0; i < props.circles.length; i++) {
            context.beginPath();
            context.arc(getX(i), getY(i), 20, 0, 2*Math.PI);
            context.fill();
        }
    }
    const drawLine = (context, i, j) => {
        context.beginPath();
        context.moveTo(getX(i), getY(i));
        context.lineTo(getX(j), getY(j));
        context.stroke();
    }
    const drawPath = context => {
        if(props.path.length <= 1) return;
        
        for(let i = 1; i < props.path.length; i++) {
            drawLine(context, props.path[i-1], props.path[i]);
        }
        if(props.drawLastLine){
            drawLine(context, props.path[props.path.length - 1], props.path[0]);
        }
    }
    
    const draw = context => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = 'black';
        context.strokeStyle = "black";
        context.shadowColor = "black";
        context.lineWidth = 6;
        context.shadowBlur = 2;
        drawCircles(context);
        drawPath(context);
    }
   
        return (
            <div className="main-area" onClick={props.handleClick}>
                    <Canvas draw={draw} circles={props.circles} path={props.path}/>
            </div>
        );
}
export default MainArea;
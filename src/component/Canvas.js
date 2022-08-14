import useCanvas from "../hooks/useCanvas";
import "./Canvas.css"
function Canvas(props) { 
    const canvasRef = useCanvas(props.draw, props.circles, props.path);
    return (
        <canvas className='canvas' ref={canvasRef}></canvas>
    );
}

export default Canvas;
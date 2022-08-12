import useCanvas from "./useCanvas";
import "./Canvas.css"
function Canvas(props) { 
    const canvasRef = useCanvas(props.draw);
    return (
        <canvas className='canvas' ref={canvasRef}></canvas>
    );
}

export default Canvas;
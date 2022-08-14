import './Slider.css'
function Slider(props) { 
    return (
        <div className="slider-div">
            <p>Pathfinding speed</p>
            <input className="slider" type="range" min="0" max="10" onChange={props.handleChange}></input>
        </div>
    );
}
export default Slider;
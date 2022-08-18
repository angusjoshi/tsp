import './Stats.css'
function Stats(props) {

    return (
        <div className="stats-div">
            <p>current path length: {props.pathLength}</p>
            <p>number of nodes: {props.nNodes}</p>
        </div>
    );
}
export default Stats;
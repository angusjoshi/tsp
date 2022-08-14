import React from 'react'
import './Button.css'
function Button(props) {

    return (
        <button className='button' onClick={props.onClick} disabled={props.disable}>
            {props.text}
        </button>
    )
}
export default Button;
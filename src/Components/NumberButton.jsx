import React from "react";

function NumberButton(props) {
    return (
        <button type="button" className="btn" value={props.buttonValue} onClick={props.handleValue}>
            {props.buttonValue}
        </button>
    )
}

export default NumberButton;
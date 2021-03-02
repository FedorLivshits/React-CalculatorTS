import React from "react";

function OperatorButton(props) {
    return (
        <button type="button"  value={props.buttonValue}
                className={(props.buttonValue === "=") ? "btn operator equal" : (props.buttonValue === "more") ? "btn operator more" : "btn operator"}>
            {props.buttonValue}
        </button>
    )
}

export default OperatorButton;
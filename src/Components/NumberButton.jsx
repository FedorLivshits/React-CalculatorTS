import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function NumberButton(props) {
    const { handleSetNumValue } = useContext(CalculatorContext);
    return (
        <button type="button" className="btn" value={props.buttonValue} onClick={handleSetNumValue}>
            {props.buttonValue}
        </button>
    )
}

export default NumberButton;
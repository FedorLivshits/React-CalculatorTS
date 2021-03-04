import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function EqualButton(props) {
    const {calculateResult} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={calculateResult}
                className="btn operator equal">
            {props.buttonValue}
        </button>
    )
}

export default EqualButton;
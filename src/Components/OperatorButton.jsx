import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function OperatorButton(props) {
    const { handleSetOperatorType, handleClearValue, calculateResult} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={(props.buttonValue === "=") ? {calculateResult} : (props.buttonValue === "AC") ? {handleClearValue} : () => handleSetOperatorType(props.buttonValue)

               }
                className={(props.buttonValue === "=") ? "btn operator equal" : (props.buttonValue === "more") ? "btn operator more" : "btn operator"}>
            {props.buttonValue}
        </button>
    )
}

export default OperatorButton;
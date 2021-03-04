import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function OperatorButton(props) {
    const {handleSetOperatorType, handleNegative, operator} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={ () => handleSetOperatorType(props.buttonValue)}
                className={(props.buttonValue === "more") ? "btn operator more" : "btn operator"}>
            {props.buttonValue}
        </button>
    )
}

export default OperatorButton;
import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function OperatorButton(props) {
    const {handleSetOperatorType} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={ () => handleSetOperatorType(props.buttonValue)}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default OperatorButton;
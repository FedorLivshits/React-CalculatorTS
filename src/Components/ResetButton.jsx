import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function ResetButton(props) {
    const {handleResetValue} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={handleResetValue}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default ResetButton;
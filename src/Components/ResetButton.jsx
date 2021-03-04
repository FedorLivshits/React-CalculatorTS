import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";


function ResetButton(props) {
    const {handleResetValue, handleResetResultValue, result} = useContext(CalculatorContext);

    return (
        <button type="button"  onClick={(!result) ? handleResetValue : handleResetResultValue}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default ResetButton;


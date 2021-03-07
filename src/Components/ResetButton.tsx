import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";
import {ButtonValueType} from "./PanelButton";


function ResetButton(props: ButtonValueType) {
    const {handleResetValue, handleResetResultValue, result} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={(result === "0") ? handleResetValue : handleResetResultValue}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default ResetButton;


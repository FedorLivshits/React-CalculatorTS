import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";
import {ButtonValueType} from "./PanelButton";

function NumberButton(props: ButtonValueType) {
    const { handleSetNumValue } = useContext(CalculatorContext);
    return (
        <button type="button" className={props.buttonValue === 0 ? "zero btn" : "btn"}  onClick={() => handleSetNumValue(props.buttonValue)}>
            {props.buttonValue}
        </button>
    )
}

export default NumberButton;
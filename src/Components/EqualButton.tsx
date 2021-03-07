import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";
import {ButtonValueType} from "./PanelButton";


function EqualButton(props: ButtonValueType) {
    const {calculateResult} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={calculateResult}
                className="btn operator equal">
            {props.buttonValue}
        </button>
    )
}

export default EqualButton;
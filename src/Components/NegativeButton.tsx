import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";
import {ButtonValueType} from "./PanelButton";


function NegativeButton(props: ButtonValueType) {
    const {handleNegative} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={handleNegative}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default NegativeButton;
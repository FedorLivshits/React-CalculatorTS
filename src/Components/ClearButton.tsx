import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";
import {ButtonValueType} from "./PanelButton";


function ClearButton(props: ButtonValueType) {
    const {handleClearValue} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={handleClearValue}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default ClearButton;
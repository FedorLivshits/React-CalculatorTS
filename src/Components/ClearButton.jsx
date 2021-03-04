import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";

function ClearButton(props) {
    const {handleClearValue} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={handleClearValue}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default ClearButton;
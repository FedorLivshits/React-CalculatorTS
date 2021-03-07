import React, {useContext} from "react";
import {CalculatorContext} from "./CalculatorLogic";
import {ButtonValueType} from "./PanelButton";


function OperatorButton(props: ButtonValueType) {
    const {handleSetOperatorType} = useContext(CalculatorContext);
    return (
        <button type="button"  onClick={ () => handleSetOperatorType(props.buttonValue)}
                className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default OperatorButton;
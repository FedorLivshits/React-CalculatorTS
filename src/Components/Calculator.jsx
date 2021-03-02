import React, {useContext} from "react";
import PanelButton from "./PanelButton";
import {CalculatorContext} from "./CalculatorLogic";

function Calculator() {
    const {  numValue } = useContext(CalculatorContext);
    return (
        <div className="calculator">
            <header className="calculator-page">
                <div className="calculator__inner">
                    <div className="calculator__window">
                        <div className="calculator__result-window">
                            <span></span>
                        </div>
                        <div className="calculator__operation-window">
                            <span>{(numValue)}</span>
                        </div>
                    </div>
                    <PanelButton />
                </div>
            </header>
        </div>
    )
}

export default Calculator;
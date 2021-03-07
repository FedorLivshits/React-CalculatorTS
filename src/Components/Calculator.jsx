import React, {useContext} from "react";
import PanelButton from "./PanelButton";
import {CalculatorContext} from "./CalculatorLogic";
import Switcher from "./common/Switcher";

function Calculator() {
    const {numValue, storeValue, operator, result, theme} = useContext(CalculatorContext);
    return (
        <div className={`calculator ${theme}`}>
                <Switcher/>
            <header className="calculator-page">
                <div className="calculator__inner">
                    <div className="calculator__window">
                        <div className="calculator__result-window">
                            <span className={result.length < 10 || result === 0 ? "result" : "big__result"}> {result}</span>
                        </div>
                        <div className="calculator__operation-window">
                            <span> {storeValue} {operator} {numValue} </span>
                        </div>
                    </div>
                    <PanelButton/>
                </div>

            </header>
        </div>
    )
}

export default Calculator;
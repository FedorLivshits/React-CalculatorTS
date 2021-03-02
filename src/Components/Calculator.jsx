import React from "react";
import PanelButton from "./PanelButton";

function Calculator(props) {

    return (
        <div className="calculator">
            <header className="calculator-page">
                <div className="calculator__inner">
                    <div className="calculator__window">
                        <div className="calculator__result-window">
                            <span>{props.result}</span>
                        </div>
                        <div className="calculator__operation-window">
                            <span>{props.numValue}</span>
                        </div>
                    </div>
                    <PanelButton handleValue={props.handleValue} />
                </div>
            </header>
        </div>
    )
}

export default Calculator;
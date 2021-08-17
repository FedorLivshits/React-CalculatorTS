import React, {useContext} from 'react'
import PanelButton from './PanelButton'
import {CalculatorContext} from './CalculatorLogic'
import Switcher from './common/Switcher'

const Calculator: React.FC = () => {
    const {numValue, storeValue, operator, result, theme} = useContext(CalculatorContext);
    return (
        <div className={`calculator ${theme}`}>
                <Switcher/>
            <header className="calculator__page">
                <div className="calculator__inner">
                    <div className="calculator__window">
                        <div className="calculator__window-result">
                            <span className={result.length < 10 || +result === 0 ? "result" : "big__result"}> {result}</span>
                        </div>
                        <div className="calculator__window-operation">
                            <span> {storeValue} {operator} {numValue} </span>
                        </div>
                    </div>
                    <PanelButton/>
                </div>

            </header>
        </div>
    )}

export default Calculator;
import React from 'react'
import {ButtonType} from './PanelButton'

const CalculatorButton: React.FC<ButtonType>= ({handler, btnClassName, buttonValue}) => {
    return (
        <div onClick={handler}
                className={btnClassName}>
            <span>{buttonValue}</span>
        </div>
    )
}

export default CalculatorButton

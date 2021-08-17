import React, {MouseEventHandler, useContext} from 'react'
import {CalculatorContext} from './CalculatorLogic'
import CalculatorButton from './CalculatorButton'


export type ButtonType = {
    handler: MouseEventHandler<HTMLDivElement>
    btnClassName: string
    buttonValue: string | number
}

const PanelButton = () => {
    const {handleClearValue, calculateResult, handleNegative, handleSetNumValue, handleSetOperatorType, handleResetValue, handleResetResultValue, result} = useContext(CalculatorContext)
    return (
        <div className="counter-btns">
            <CalculatorButton handler={(result === '0') ? handleResetValue : handleResetResultValue}
                              btnClassName={'btn operator'} buttonValue={'AC'}/>
            <CalculatorButton handler={handleClearValue} btnClassName={'btn operator'} buttonValue={'x'}/>
            <CalculatorButton handler={handleNegative} btnClassName={'btn operator'} buttonValue={'-/+'}/>
            <CalculatorButton handler={() => handleSetOperatorType('/')} btnClassName={'btn operator'}
                              buttonValue={'/'}/>

            <CalculatorButton handler={() => handleSetNumValue('7')} btnClassName={'btn'} buttonValue={7}/>
            <CalculatorButton handler={() => handleSetNumValue('8')} btnClassName={'btn'} buttonValue={8}/>
            <CalculatorButton handler={() => handleSetNumValue('9')} btnClassName={'btn'} buttonValue={9}/>
            <CalculatorButton handler={() => handleSetOperatorType('*')} btnClassName={'btn operator'}
                              buttonValue={'*'}/>

            <CalculatorButton handler={() => handleSetNumValue('4')} btnClassName={'btn'} buttonValue={4}/>
            <CalculatorButton handler={() => handleSetNumValue('5')} btnClassName={'btn'} buttonValue={5}/>
            <CalculatorButton handler={() => handleSetNumValue('6')} btnClassName={'btn'} buttonValue={6}/>
            <CalculatorButton handler={() => handleSetOperatorType('-')} btnClassName={'btn operator'}
                              buttonValue={'-'}/>

            <CalculatorButton handler={() => handleSetNumValue('1')} btnClassName={'btn'} buttonValue={1}/>
            <CalculatorButton handler={() => handleSetNumValue('2')} btnClassName={'btn'} buttonValue={2}/>
            <CalculatorButton handler={() => handleSetNumValue('3')} btnClassName={'btn'} buttonValue={3}/>
            <CalculatorButton handler={() => handleSetOperatorType('+')} btnClassName={'btn operator'}
                              buttonValue={'+'}/>
            <CalculatorButton handler={() => handleSetNumValue('0')} btnClassName={'btn zero'} buttonValue={0}/>
            <CalculatorButton handler={() => handleSetNumValue('.')} btnClassName={'btn'} buttonValue={'.'}/>
            <CalculatorButton handler={calculateResult} btnClassName={'btn equal'} buttonValue={'='}/>
        </div>
    )
}
export default PanelButton
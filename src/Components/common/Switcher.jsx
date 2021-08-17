import React, {useContext} from 'react'
import {CalculatorContext} from '../CalculatorLogic'

const Switcher = () => {
    const {changeTheme} = useContext(CalculatorContext)
    return (
        <label className="switch">
            <input type="checkbox" onClick={changeTheme}/>
            <span className="slider round"></span>
        </label>

    )
}

export default Switcher
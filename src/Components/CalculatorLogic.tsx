import React, {createContext, useState} from 'react'

export type ContextType = {
    numValue: string,
    storeValue: string,
    operator: string,
    result: string,
    theme: string,
    handleSetNumValue: (value: string) => void,
    handleStoreValue: () => void,
    handleResetValue: () => void,
    handleClearValue: () => void,
    handleNegative: () => void,
    handleSetOperatorType: (operator: string) => void,
    handleResetResultValue: () => void,
    calculateResult: () => void,
    changeTheme: () => void,
}
export const CalculatorContext = createContext<ContextType>(undefined!);

const CalculatorProvider: React.FC = (props) => {
    let [numValue, setNumValue] = useState("")
    let [storeValue, setStoreValue] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState("0")
    let [theme, setTheme] = useState("light")

    //отрисовываем первое число
    const handleSetNumValue = (value: string) => {
        if ((!numValue.includes('.') || value !== '.') && numValue.length < 8) {
            setNumValue(numValue + value);
        }
    }
    //сохраняем число в другой стэйт для возможности ввода второго
    const handleStoreValue = () => {
        setStoreValue(numValue);
        setNumValue("");
    }

    //сохраняем оператор
    const handleSetOperatorType = (operator: string) => {
        if (numValue) {
            setOperator(operator);
            handleStoreValue();
        }
        if (storeValue) {
            setOperator(operator);
        }
    }

    //Сбрасываем введенные числа
    const handleResetValue = () => {
        setNumValue("")
        setStoreValue("");
        setOperator("");
    }
    //Сбрасываем результат
    const handleResetResultValue = () => {
        setResult("0")
    }
    //удаляем по одному символу
    const handleClearValue = () => {
        if (numValue !== "") {
            let clearNumber = numValue.slice(0, numValue.length - 1)
            setNumValue(clearNumber)
        }
    }

    //меняем знак числа на противоположный
    const handleNegative = () => {
        if (numValue) {
            if (+numValue > 0) {
                setNumValue(`-${numValue}`)
            } else {
                setNumValue(numValue.slice(1))
            }
        } else if (+storeValue > 0) {
            setStoreValue(`-${storeValue}`)
        } else {
            setStoreValue(storeValue.slice(1))
        }
    }

    //считаем результат
    const calculateResult = () => {
        let num1 = parseFloat(storeValue)
        let num2 = parseFloat(numValue)

        if (numValue && storeValue && operator) {
            switch (operator) {
                case "+":
                    setResult(String(Math.round((num1 + num2) * 1000) / 1000))
                    break
                case "-":
                    setResult(String((Math.round((num1 - num2) * 1000) / 1000)))
                    break
                case "*":
                    setResult(String(Math.round((num1 * num2) * 1000) / 1000))
                    break
                case "/":
                    setResult(String(Math.round((num1 / num2) * 1000) / 1000))
                    break
                default:
                    break;
            }
            setNumValue("")
            setStoreValue("")
            setOperator("")
        }
    };

    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <CalculatorContext.Provider
            value={{
                numValue,
                handleSetNumValue,
                handleStoreValue,
                handleResetValue,
                handleClearValue,
                handleNegative,
                handleSetOperatorType,
                handleResetResultValue,
                calculateResult,
                changeTheme,
                storeValue,
                operator,
                result,
                theme
            }}>
            {props.children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;
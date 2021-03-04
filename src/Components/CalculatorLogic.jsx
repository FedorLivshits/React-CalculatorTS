import React, {useState} from 'react';

export const CalculatorContext = React.createContext();

const CalculatorProvider = (props) => {
    let [numValue, setNumValue] = useState("")
    let [storeValue, setStoreValue] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState(0)
    let [darkTheme, setDarkTheme] = useState(false)

    //отрисовываем первое число
    const handleSetNumValue = (value) => {
        if ((!numValue.includes('.') || value !== '.') && numValue.length < 8) {
            setNumValue((numValue + value).replace(/^0+/, ''));
        }
    }
    //сохраняем число в другой стэйт для возможности ввода второго
    const handleStoreValue = () => {
        setStoreValue(numValue);
        setNumValue("");
    }

    //сохраняем оператор
    const handleSetOperatorType = (operatorType) => {
        if (numValue) {
            setOperator(operatorType);
            handleStoreValue();
        }
        if (storeValue) {
            setOperator(operatorType);
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
        setResult(0)
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
        if (numValue > 0) {
            setNumValue(`-${numValue}`)
        } else {
            setNumValue(numValue.slice(1))
        }
        if (storeValue > 0) {
            setStoreValue(`-${storeValue}`)
        } else {
            setStoreValue(storeValue.slice(1))
        }
    }

    //считаем результат
    const calculateResult = () => {

        if (numValue && storeValue && operator) {
            let num1 = parseInt(numValue)
            let num2 = parseInt(storeValue)
            switch (operator) {
                case "+":
                        setResult(num1 + num2);
                    break
                case "-":
                    setResult(num1 - num2);
                    break
                case "*":
                    setResult(num1 * num2);
                    break
                case "/":
                    setResult(num1 / num2);
                    break
                default:
                    break;
            }
            setNumValue("")
            setStoreValue("")
            setOperator("")
        }
    };


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
                storeValue,
                operator,
                result
            }}>
            {props.children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;
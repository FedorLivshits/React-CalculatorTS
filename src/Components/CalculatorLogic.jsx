import React, {useState} from 'react';

export const CalculatorContext = React.createContext();

const CalculatorProvider = (props) => {
    let [numValue, setNumValue] = useState("")
    let [storeValue, setStoreValue] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState(0)
    let [darkTheme, setDarkTheme] = useState(false)

    //отрисовываем первое число
    const handleSetNumValue = (e) => {
        let value = +(e.currentTarget.value)
        setNumValue(numValue + value);
    }
    //сохраняем число в другой стэйт для возможности ввода второго
    const handleStoreValue = () => {
        setStoreValue(numValue);
        setNumValue("");
    }

    const handleResetValue = () => {
        setNumValue("")
        setStoreValue( "");
        setOperator("");
    }
  const handleClearValue = () => {
        if(numValue !== ""){
            let clearNumber = numValue.slice(0, numValue.length - 1)
            setNumValue(clearNumber)
        }

    }


    const handleSetOperatorType = (operatorType) => {
        if (numValue) {
            setOperator(operatorType);
            handleStoreValue();
        }
        if (storeValue) {
            setOperator(operatorType);
        }
    }
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
                handleSetOperatorType,
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
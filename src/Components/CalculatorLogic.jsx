import React, {useState} from 'react';

export const CalculatorContext = React.createContext();

const CalculatorProvider = (props) => {
    let [numValue, setNumValue] = useState("")
    let [storeValue, setStoreValue] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState(0)

    const handleSetNumValue = (e) => {
        let value = +(e.currentTarget.value)//передать сюда value кнопки с цифрой и отправить в стэйт
        setNumValue(numValue + value);
    }
    const handleStoreValue = () => {
        setStoreValue(numValue);
        setNumValue("");
    }
    const handleOperatorValue = (e) => {
        let value = e.currentTarget.value//передать сюда value кнопки с цифрой и отправить в стэйт
        setOperator(operator = value);
    }


    return (
        <CalculatorContext.Provider
            value={{
                numValue,
                handleSetNumValue,
                handleStoreValue,
                storeValue,
            }}>
            {props.children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;
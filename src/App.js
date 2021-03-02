import './App.css';
import Calculator from "./Components/Calculator";
import React, {useState} from "react";

function App() {
    let [numValue, setNumValue] = useState(0)
    let [result, setResult] = useState(0)

    const handleValue = (e) => {
        let value = e.currentTarget.value//передать сюда value кнопки с цифрой и отправить в стэйт
        setNumValue(numValue + value);

    }
    return (
            <Calculator handleValue={handleValue} numValue={numValue} result={result}/>

    );
}






export default App;


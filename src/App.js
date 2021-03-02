import './App.css';
import React, {useState} from "react";

function App() {
    return (
        <Calculator/>
    );
}

function Calculator() {
    let [firsNumValue, setFirstNumValue] = useState(0)

    const onButtonClick = () => {
       alert("Привет") //передать сюда value кнопки с цифрой и отправить в стэйт
    }
    return (
        <div className="calculator">
            <header className="calculator-page">
                <div className="calculator__inner">
                    <div className="calculator__window">
                        <div className="calculator__result-window">
<span>1214</span>
                        </div>
                        <div className="calculator__operation-window">
                           <span>1200 + 14</span>
                        </div>
                    </div>
                    <PanelButton onButtonClick={onButtonClick}/>
                    <div className="calculator-title">

                    </div>
                </div>
            </header>
        </div>
    )
}

const PanelButton = (props) => {

    return (
        <div className="counter-btns">
            <div className="row">
                <OperatorButton buttonValue={"AC"}/>
                <OperatorButton buttonValue={'x'}/>
                <OperatorButton buttonValue={"%"}/>
                <OperatorButton buttonValue={"/"}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={7} onButtonClick={props.onButtonClick}/>
                <NumberButton buttonValue={8}/>
                <NumberButton buttonValue={9}/>
                <OperatorButton buttonValue={"*"}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={4}/>
                <NumberButton buttonValue={5}/>
                <NumberButton buttonValue={6}/>
                <OperatorButton buttonValue={"-"}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={1}/>
                <NumberButton buttonValue={2}/>
                <NumberButton buttonValue={3}/>
                <OperatorButton buttonValue={"+"}/>
            </div>
            <div className="row">
                <OperatorButton buttonValue={"more"}/>
                <NumberButton buttonValue={0}/>
                <OperatorButton buttonValue={","}/>
                <OperatorButton buttonValue={"="}/>
            </div>

        </div>
    )
}

function NumberButton(props) {
    return (
        <button className="btn" onClick={props.onButtonClick} value={props.buttonValue}>
            {props.buttonValue}
        </button>
    )
}

function OperatorButton(props) {
    return (
        <button className={(props.buttonValue === "=") ? "btn operator equal" : "btn operator"}>
            {props.buttonValue}
        </button>
    )
}

export default App;


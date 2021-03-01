import './App.css';
import React, {useState} from "react";

function App() {
    return (
        <Calculator/>
    );
}

function Calculator() {
    const onButtonClick = (e) => {
        setFirstNumValue(e.currentTarget.value)
    }
    return (
        <div className="calculator">
            <header className="calculator-page">
                <div className="calculator__inner">
                    <div className="calculator__window">


                    </div>
                    <PanelButton/>
                    <div className="calculator-title">
                        Calculator by Fedor Livshits
                    </div>
                </div>
            </header>
        </div>
    )
}

const PanelButton = (props) => {

    return (
        <div className="counter-btns">
            <div className="calculate__line-btns-1">
                <OperatorButton buttonValue={"reset"}/>
                <OperatorButton buttonValue={'x'}/>
                <OperatorButton buttonValue={"%"}/>
                <OperatorButton buttonValue={"/"}/>
            </div>
            <div className="calculate__line-btns-2">
                <NumberButton buttonValue={7}/>
                <NumberButton buttonValue={8}/>
                <NumberButton buttonValue={9}/>
                <OperatorButton buttonValue={"*"}/>
            </div>
            <div className="calculate__line-btns-3">
                <NumberButton buttonValue={4}/>
                <NumberButton buttonValue={5}/>
                <NumberButton buttonValue={6}/>
                <OperatorButton buttonValue={"-"}/>
            </div>
            <div className="calculate__line-btns-4">
                <NumberButton buttonValue={1}/>
                <NumberButton buttonValue={2}/>
                <NumberButton buttonValue={3}/>
                <OperatorButton buttonValue={"+"}/>
            </div>
            <div className="calculate__line-btns-5">
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
        <button className="btn">
            {props.buttonValue}
        </button>
    )
}

function OperatorButton(props) {
    return (
        <button className="btn operator">
            {props.buttonValue}
        </button>
    )
}

export default App;


import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";



const PanelButton = () => {
    return (
        <div className="counter-btns">
            <div className="row">
                <OperatorButton buttonValue={"AC"}/>
                <OperatorButton buttonValue={'x'}/>
                <OperatorButton buttonValue={"%"}/>
                <OperatorButton buttonValue={"/"}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={7}/>
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
export default PanelButton;
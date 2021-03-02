import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";


const PanelButton = (props) => {

    return (
        <div className="counter-btns">
            <div className="row">
                <OperatorButton buttonValue={"AC"}  />
                <OperatorButton buttonValue={'x'} />
                <OperatorButton buttonValue={"%"}/>
                <OperatorButton buttonValue={"/"} />
            </div>
            <div className="row">
                <NumberButton buttonValue={7} handleValue={props.handleValue}/>
                <NumberButton buttonValue={8} handleValue={props.handleValue}/>
                <NumberButton buttonValue={9} handleValue={props.handleValue}/>
                <OperatorButton buttonValue={"*"}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={4} handleValue={props.handleValue}/>
                <NumberButton buttonValue={5} handleValue={props.handleValue}/>
                <NumberButton buttonValue={6} handleValue={props.handleValue}/>
                <OperatorButton buttonValue={"-"}/>
            </div>
            <div className="row">
                <NumberButton buttonValue={1} handleValue={props.handleValue}/>
                <NumberButton buttonValue={2} handleValue={props.handleValue}/>
                <NumberButton buttonValue={3} handleValue={props.handleValue}/>
                <OperatorButton buttonValue={"+"}/>
            </div>
            <div className="row">
                <OperatorButton buttonValue={"more"}/>
                <NumberButton buttonValue={0} handleValue={props.handleValue}/>
                <OperatorButton buttonValue={","}/>
                <OperatorButton buttonValue={"="}/>
            </div>

        </div>
    )
}
export default PanelButton;
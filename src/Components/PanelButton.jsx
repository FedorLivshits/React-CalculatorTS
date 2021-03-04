import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import ResetButton from "./ResetButton";
import ClearButton from "./ClearButton";
import NegativeButton from "./NegativeButton";



const PanelButton = () => {
    return (
        <div className="counter-btns">
            <div className="row">
                <ResetButton buttonValue={"AC"}/>
                <ClearButton buttonValue={'x'}/>
                <NegativeButton buttonValue={"-/+"}/>
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
                <NumberButton buttonValue={"."}/>
                <EqualButton buttonValue={"="}/>
            </div>

        </div>
    )
}
export default PanelButton;
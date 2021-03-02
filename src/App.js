import './App.css';
import Calculator from "./Components/Calculator";
import React, {useState} from "react";
import CalculatorProvider from "./Components/CalculatorLogic";

function App() {

    return (
        <CalculatorProvider>
            <Calculator />
        </CalculatorProvider>

    );
}






export default App;


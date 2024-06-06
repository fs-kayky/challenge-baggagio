"use client";

import { useState } from "react";
import "./styles/imports.css";
import { Button } from "./components/button/button"
import { LgButton } from "./components/largeButton/lgButton"


export default function Home() {

  const [firstValue, setFirstValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleClickPi = () => {
    setFirstValue('3.1415926')
  }


  const setNumber = (n) => {
      if(firstValue === '0') {
      if(n === '.') {
        setFirstValue('0.')
      } else {
        setFirstValue(n)
      }
      } else {
        let number = firstValue + n
        setFirstValue(number);
      }
    }

  const calculate = (operator) => {
      if(operator === "/") {
        setSecondValue(parseFloat(secondValue) / parseFloat(firstValue))
      }

      else if(operator === "+") {
        setSecondValue(parseFloat(secondValue) + parseFloat(firstValue))
      }

      else if(operator === "-") {
        setSecondValue(parseFloat(secondValue) - parseFloat(firstValue))
      }

      else if(operator === "*") {
        setSecondValue(parseFloat(secondValue) * parseFloat(firstValue))
      }
  }

  const handleClickOperator = (operator) => {
    if(firstValue != '' && secondValue != "") {
      calculate(operator)
      setOperation(operator);
      setFirstValue('0');
    
    } else {
      setOperation(operator)
      setSecondValue(firstValue)
      setFirstValue('')
    }
  }

  const handleClickEquals = () => {
    if(firstValue != '' && secondValue != "" && operation != '=') {
      if(operation === "/") {
        setFirstValue(parseFloat(secondValue) / parseFloat(firstValue))
      }
  
      else if(operation === "+") {
        setFirstValue(parseFloat(secondValue) + parseFloat(firstValue))
      }
  
      else if(operation === "-") {
        setFirstValue(parseFloat(secondValue) - parseFloat(firstValue))
      }
  
      else if(operation === "*") {
        setFirstValue(parseFloat(secondValue) * parseFloat(firstValue))
      }

      setSecondValue("")
      setOperation("")

    }
  }

  const clearContent = () => {
    setFirstValue('0')
    setSecondValue('')
    setOperation('')
  }

  const clearEntity = () => {
    if(firstValue.length === 1) {
      setFirstValue('0')
    } else {
      let aux = firstValue.slice(0, firstValue.length - 1)
      setFirstValue(aux)
    }
    
  }


  return (
    <main className="content">
      <div className="calculator">
        
        <div className="calculator__header">
          <p className="calculator__solution">{secondValue} {operation}</p>
          <p id="cal" className="calculator__equation">{firstValue}</p>
        </div>
        
        

        <div className="calculator__keyboard">

          <div className="calculator__rows">
            <Button text={'C'} btnBackground= {'#a8a4a4'} onClick={()=> clearContent()}/>
            <Button text={'pi'} btnBackground= {'#a8a4a4'} onClick={()=> handleClickPi()}/>
            <Button text={'Del'} btnBackground= {'#a8a4a4'} onClick={()=> clearEntity()}/>
            <Button text={'÷'} btnBackground= {'#E09132'} onClick={()=> handleClickOperator('/')} />

          </div>

          <div className="calculator__rows">
            <Button text={'7'} onClick={()=> setNumber('7')} />
            <Button text={'8'} onClick={()=> setNumber('8')}/>
            <Button text={'9'} onClick={()=> setNumber('9')}/>
            <Button text={'x'} btnBackground= {'#E09132'} onClick={()=> handleClickOperator('*')} />
          </div>

          <div className="calculator__rows">
            <Button text={'4'} onClick={()=> setNumber('4')}/>
            <Button text={'5'} onClick={()=> setNumber('5')}/>
            <Button text={'6'} onClick={()=> setNumber('6')}/>
            <Button text={'-'} btnBackground= {'#E09132'} onClick={()=> handleClickOperator('-')} />
          </div>
          <div className="calculator__rows">
            <Button text={'1'} onClick={()=> setNumber('1')}/>
            <Button text={'2'} onClick={()=> setNumber('2')}/>
            <Button text={'3'} onClick={()=> setNumber('3')}/>
            <Button text={'+'} btnBackground= {'#E09132'} onClick={()=> handleClickOperator('+')} />
          </div>

          <div className="calculator__rows">
            <LgButton text={'0'} onClick={()=> setNumber(0)}/>
            <Button text={','} onClick={()=> setNumber('.')} />
            <Button btnBackground= {'#E09132'} text={'='} onClick={()=> handleClickEquals()} />

          </div>
        
        </div>
      
      </div>
    </main>
  );
}

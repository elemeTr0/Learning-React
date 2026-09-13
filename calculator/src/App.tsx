import { useState } from 'react'
import Calculator from './Calculator'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [bool, setBool] = useState(false)
  const [clickedSign, setClickedSign] = useState(false)

  function setNumber(x: number){

    if(clickedSign) {setNum2(0); setClickedSign(false)}


    if(bool){
      setNum2(x => x - x);
      console.log(num2);
      setBool(true)
    }else{
      setNum2(num2*10 + x)
    }
  }

  function setSign(r:string){
    setBool(false);
    if(r !== 'C') setNum2(0);
    
    setClickedSign(true);

    if(r === "+") setNum1(num1 + num2)
    if(r === "-") setNum1(num1 - num2)
    if(r === "/") setNum1(num1 / num2)
    if(r === "*") setNum1(num1 * num2)
    if(r === "%") setNum1(num1 % num2)
    if(r === "C") setNum1(0)
  }

  return (
    <div className="Calc">
      <div>
    <h5>{num1}</h5>
    <h1>{num2}</h1>
    </div>
    <div>
      <Calculator setNumber={setNumber} setSign={setSign}/>
      </div>
    </div>
  )
}

export default App

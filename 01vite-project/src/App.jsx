import { useState } from "react"
import Chai from "./Chai"

function App() {
 
  let [count,setcounter]=useState(0)
  function addnumber(){
    if(count!==20)
    {
    count = count+1;
    setcounter(count)
    }
  }
  const reduceNumber=()=>{
    if(count!==0){
    count = count-1;
    setcounter(count)
    }
  }

  return (
    <>
    <Chai/>
    <h2>the value of Count is {count}</h2>
    <button onClick={addnumber}>Add Counter {count}</button>
    <br/>
    <button onClick={reduceNumber}>Reduce Counter</button>
  </>
  )
}

export default App

import { useState } from "react"

// Click Counter app ---------------------------------------------------


function App() {
let [Counter,setCounter]=useState(0);

const addval=()=>{
  if(Counter<20)
setCounter(Counter+1)

}

const removeval=()=>{
  if(Counter>0)
  setCounter(Counter-1)
  
  }
  

  return (
    <div>
      <h1>Counter App</h1>
<h2>Counter:{Counter}</h2>
    <button onClick={addval} >AddValue</button>
    <br />
    <button onClick={removeval} >Remove Value</button>

    </div>
  )
}




export default App

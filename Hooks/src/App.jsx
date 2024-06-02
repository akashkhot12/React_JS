import { useState } from 'react'

import './App.css'
import StateHook from './StateHook';

function App() {

//   const [value,setvalue] = useState(0);
// function increment(){
//   setvalue(value+1)
// }
// function decrement(){
//   setvalue(value-1)
// }

const [state,setState] = useState({count:0,name:"Increment"});
const count = state.count
const name = state.name

function increment(){
  setState(prevState=>{
    return {...prevState,name:"Increment",count:prevState.count+1}
  })
}

function decrement(){
  setState(prevState=>{
    return {...prevState,name:"Decrement",count:prevState.count-1}
  })
}

  return (
    <>
      {/* <div className="hello">
      <button onClick={increment}>+</button><span className='digit'>{value}</span><button onClick={decrement}>-</button>
      </div> */}

      <div>
        <h1>{name}</h1>
      <button onClick={increment} >+</button><span className='digit'>{count}</span><button onClick={decrement}>-</button>
      </div>
      <StateHook/>
    </>
  )
}

export default App

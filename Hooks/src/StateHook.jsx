import React, { useState } from 'react'
import './App.css'

export default function StateHook() {
const [state,setState] = useState({count:0,name:"START"});
const count = state.count;
const name = state.name;

function increment(){
    setState(prevCount=>{
        return{...prevCount,name:"INCREMENT",count:prevCount.count+1}
    })
}
function decrement(){
    setState(prevCount=>{
        return{...prevCount,name:"DECREMENT",count:prevCount.count-1}
    })
}

  return (
    <div className='digit'>
        <h3>{name}</h3>
        <button onClick={increment}>+</button><span className='digit'>{count}</span><button onClick={decrement}>-</button>
    </div>
  )
}

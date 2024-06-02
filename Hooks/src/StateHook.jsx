import React, { useState } from 'react'

export default function StateHook() {
    const [count,setCount] = useState({value:0,name:"Akash"});
    const value = count.value
    const name = count.name

    function increment(){
       setCount(prevCount=>{
        return{...prevCount,name:"Increment",value:prevCount.count+1}
       })
    }

    function decrement(){
        setCount(prevCount=>{
         return{...prevCount,name:"decrement",value:prevCount.count-1}
        })
     }
    

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={increment}>Add</button> {value} <button onClick={decrement}>Minus</button>
    </div>
  )
}

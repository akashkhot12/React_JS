import React from 'react'
import Child1 from './Child1'

export default function Parents1() {
    function hello(){
        alert("hellow wolrd..!")
    }
  return (
    <div>
        <Child1 name={"hello akash , all functions are work properly"}></Child1>
        <button onClick={()=>hello()}>Click me </button>
    </div>
  )
}




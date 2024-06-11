import React, { useRef } from 'react'

export default function Ref() { 
    let inputRef = useRef(null);
    function handleInput(){
        console.log("Function called");
        inputRef.current.value = "10000"
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
  return (
    <div>
        <h1>Use ref in react</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>handle Input</button>
    </div>
  )
}

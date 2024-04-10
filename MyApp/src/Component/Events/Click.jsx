import React from 'react'

export default function Click() {
    let name = "name";
    function data(){
    alert("hello world")
   }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={data}>hello</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function Rerendering() {
    const[data,resetData] = useState("Akash khot");
    function updateData(){
        resetData("i am from here....")
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateData}>Click</button>
    </div>
  )
}

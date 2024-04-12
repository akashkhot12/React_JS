import React, { useState } from 'react'

export default function HideAndShow() {
    const [status,setStatus]=useState(true);
  return (
    <div>
        {
            status? 
            <h1>Hello world</h1> :null
        }
        {/* <button onClick={()=>setStatus(false)}>hide</button>
        <button onClick={()=>setStatus(true)}>show</button> */}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

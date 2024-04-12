import React, { useState } from 'react'
import Child from './Child'
export default function Parents() {
    let[name,setName]=useState("Akash khot")
    function updateName(){
        setName("value Changed")
    }
  return (
    <div>
        <Child name={name}/>
        <button onClick={()=>updateName()}>Update Name</button>
    </div>
  )
}

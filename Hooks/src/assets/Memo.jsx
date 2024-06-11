import React, { useMemo, useState } from 'react'

export default function Memo() {
const [count,setCount] = useState(0);
const [item,setItem] = useState(0);

const memorised = useMemo(function multi(){
    console.log("multi called");
    return count*5;
},[count])


  return (
    <div>
        <h1>count is  = {count}</h1>
        <h1> item is = {item}</h1>
        <h2>{memorised}</h2>
        <button onClick={()=>setCount(count+1)}>add count</button>
        <button onClick={()=>setItem(item+1)}>add items</button>
    </div>
  )
}

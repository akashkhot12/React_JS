import React, { useMemo, useState } from 'react'

export default function Memo2() {
    const [index,setIndex] = useState(0);
    const [count,setCount] = useState(0);


    const Memorised = useMemo(function counter(){
        console.log("function called");
        return count*5
    }) 

  return (
    <div>
        <h1>{count}</h1>
        <h1>{index}</h1>
        <h1>{Memorised}</h1>
        <button onClick={()=>setCount(count+1)}>count</button>
        <button onClick={()=>setIndex(index+1)}>index</button>
    </div>
  )
}

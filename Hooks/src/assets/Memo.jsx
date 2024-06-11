import React, { useState } from 'react'

export default function Memo() {
const [count,setCount] = useState(0);
const [item,setItem] = useState(0);



  return (
    <div>
        <h1>{count}</h1>
        <h1>{item}</h1>
        <button>add count</button>
        <button>add items</button>
    </div>
  )
}

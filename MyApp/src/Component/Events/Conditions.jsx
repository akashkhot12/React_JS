import React, { useState } from 'react'

export default function Conditions() {
    const[login,setLogin] = useState(true)
  return(
    <div>
        {login? <h1>Welcome Anil</h1> : <h1>Welcome Guest</h1>}
    </div>
  )
}

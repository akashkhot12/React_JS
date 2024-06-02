import { useState } from 'react'

import './App.css'

function App() {

  const [value,setvalue] = useState(0);
function increment(){
  setvalue(value+1)
}
function decrement(){
  setvalue(value-1)
}

  return (
    <>
      <div className="hello">
      <button onClick={increment}>+</button><span className='digit'>{value}</span><button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App

import React from 'react'
// import StateHook from './StateHook'
import './App.css'
import E from './assets/UseContextHooks/E'
import Memo from './assets/Memo'
import Ref from './assets/Ref'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Router-React/Home'
import About from './Router-React/About'
import Params from './ParamsHooks/Params'
// import EffectHooks from './EffectHooks'


export default function App() {
  return (
    <div>
      {/* <StateHook/> */}
      {/* <EffectHooks/> */}
      {/* <E/> */}
     {/* <Memo/> */}
     {/* <Ref/> */}


{/* basic routes */}
     <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Home/>} /> 
    <Route path='/about' element={<About/>} />  */}
    <Params/>
    </Routes>
     </BrowserRouter>



    </div>
  )
}

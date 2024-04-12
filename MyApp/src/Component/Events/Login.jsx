import React, { useState } from 'react'

export default function Login() {
    const [user,setUser] = useState("");
    const [password,setpassword] = useState("")
    function getData(event){
        
        event.preventDefault()
       
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={getData}>
        <input type="text" placeholder='Enter User Id' />
        <br /><br />
        <input type="text" placeholder='Enter User Password' />
        <br /><br />
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

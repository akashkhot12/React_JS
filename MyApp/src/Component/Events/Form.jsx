import React, { useState } from 'react'

export default function Form() {
const [name,setName] = useState("");
const [tnc,setTnc] = useState(false);
const [intrest,setIntrest] = useState("");

    function getFormData(e){
        console.log(name,tnc,intrest);
        console.log(intrest);
        e.preventDefault()

    }
  return (
    <div>
        <form action="" onSubmit={getFormData}>
            <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} /> <br /><br />
            
            <select name="" id="" onChange={(e)=>setIntrest(e.target.value)}>
                <option value="">Select Options</option>
                <option value="">male</option>
                <option value="">female</option>
            </select><br /><br />
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept term and conditions</span><br /><br />
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

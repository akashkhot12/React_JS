import React from 'react'

export default function Form() {
    function getFormData(e){
        e.preventDefault()
    }
  return (
    <div>
        <form action="" onSubmit={getFormData}>
            <input type="text" placeholder='enter name' /> <br /><br />
            
            <select name="" id="">
                <option value="">Select Options</option>
                <option value="">male</option>
                <option value="">female</option>
            </select><br /><br />
            <input type="checkbox" /><span>Accept term and conditions</span><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

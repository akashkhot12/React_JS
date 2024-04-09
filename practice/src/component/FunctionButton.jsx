import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FunctionButton() {
    let name = "akash khot"
    function clickButton() {
        alert("you press the button..!")
    }
    return (
    <div>
        <h1>{name}</h1>
        <Button onClick={()=>clickButton()} variant="warning">Warning</Button>
    </div>
  )
}

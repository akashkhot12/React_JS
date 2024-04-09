import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FunctionButton() {
    function clickButton() {
        alert("you press the button..!")
    }
    return (
    <div>
        <Button onClick={()=>clickButton()} variant="warning">Warning</Button>
    </div>
  )
}

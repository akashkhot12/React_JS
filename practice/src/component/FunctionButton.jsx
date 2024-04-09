import React from 'react';
import Button from 'react-bootstrap/Button';
import StateCompo from './state/StateCompo';

export default function FunctionButton() {
    // let name = "akash khot"
    // function clickButton() {
    //     alert("you press the button..!")
    // }
    return (
    <div>
        {/* <Button onClick={clickButton} variant="warning">Warning</Button> */}
        <StateCompo/>
    </div>
  )
}


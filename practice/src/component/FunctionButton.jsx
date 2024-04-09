import React from 'react';
import StateCompo from './state/StateCompo';
import ClassStateCompo from './state/ClassStateCompo';

export default function FunctionButton() {
    // let name = "akash khot"
    // function clickButton() {
    //     alert("you press the button..!")
    // }
    return (
    <div>
        {/* <Button onClick={clickButton} variant="warning">Warning</Button> */}
        <StateCompo/>
        <ClassStateCompo/>
    </div>
  )
}


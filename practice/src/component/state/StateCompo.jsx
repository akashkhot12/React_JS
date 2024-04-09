import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function StateCompo() {
    let [data,reset]=useState("AKASH")
    function valueChange(){
        reset("Khot")
    }
  return (
    <div>
        <h1>State Component</h1>
        <h1>{data}</h1>
      <Button onClick={valueChange} variant="warning">Click me </Button>
    </div>
  )
}

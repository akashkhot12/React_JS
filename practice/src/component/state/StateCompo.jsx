import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function StateCompo() {
    const [data,resetData]=useState("akash");
    function setvalue(){
        resetData("Khot")
    }
  return (
    <div>
        <h1>State Component</h1>
        <h2>{data}</h2>
      <Button onClick={setvalue} variant="warning">Click me </Button>
    </div>
  )
}

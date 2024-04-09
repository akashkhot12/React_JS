import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function StateCompo() {
  let[value,resetValue]=useState(0);
  function onClickValue(){
    resetValue(value++)
  }
  return (
    <div>
        <h1>State Component</h1>
        <h1>{value}</h1>
      <Button onClick={onClickValue} variant="warning">Click me </Button>
    </div>
  )
}

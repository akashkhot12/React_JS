import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function StateCompo() {
  let[value,resetValue]=useState(0);
  function adding(){
    resetValue(value++)
  }
  function minus() {
    if (value>=0) {
        resetValue(value--)
    }
    
  }
  return (
    <div>
        <h1>State Component</h1>
        <h1>{value}</h1>
      <Button onClick={adding} variant="warning">adding </Button>
      <Button onClick={minus} variant="warning"> minus </Button>
    </div>
  )
}

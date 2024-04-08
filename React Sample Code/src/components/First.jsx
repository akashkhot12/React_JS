/* eslint-disable react/prop-types */
import React from "react";

export default function First(props) {
  return (
    <div>
      <ul>
        <li>Father Name : {props.fatherName}</li>
        <li>Mother Name : {props.motherName}</li>
      </ul>

      <h1>
        <b>First Counter : {props.counter}</b>
      </h1>
      <button onClick={() => props.handleCount(props.counter + 1)}>
        incrmeent count
      </button>
    </div>
  );
}

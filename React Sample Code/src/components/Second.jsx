/* eslint-disable react/prop-types */
import React, { useState } from "react";
import First from "./First";

export default function Second(props) {
  const { id, salary } = props;

  const defaultValue = 10;
  const [count, setCount] = useState(defaultValue);

  return (
    <div>
      <ul>
        <li>ID : {id}</li>
        <li>Salary : {salary}</li>
      </ul>

      <h1>count : {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        count
      </button>
      <First counter={count} handleCount={setCount} />
    </div>
  );
}

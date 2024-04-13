import React from "react";

export default function Home(props) {
  props.setDataFromChild("i am home child");
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>FirstName : {props.data.fname}</li>
        <li>LastName : {props.data.lname}</li>
      </ul>
    </div>
  );
}

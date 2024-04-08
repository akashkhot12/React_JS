import React from "react";

import "../assets/navbar.css";

export default function Navbar() {
  const myStyle = { color: "red", border: "3px solid red" };
  return (
    <div className="navbar" style={myStyle}>
      Navbar
    </div>
  );
}

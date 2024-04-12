import React from "react";
import '../component/Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav>
        <a href="#">No mask</a>
        <ul className="list">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="search">Search</button>
        <button className="menu">Menu</button>
      </nav>
    </div>
  );
}

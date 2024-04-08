import React from "react";
import "./App.css";
import { FaHockeyPuck } from "react-icons/fa";
import Navbar from "./components/Navbar";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <>
      <Navbar />
      <First fatherName={"abc"} motherName="xyz" />
      <Second id={100} salary={"10000000000"} />
    </>
  );
}

export default App;

import React,{Component, useState} from "react";
// import BootstrapTable from './component/BootstrapTable'
// import FunctionButton from "./component/FunctionButton";

import Student from "./Student";

import sampleData from "./sample.json";

export default function App() {
  let [data,resetData]=useState("Akash");
  function randomName(){
    resetData("Khot Akash")
  }
  return (
    <>
      {/* <BootstrapTable/>
      <FunctionButton/> */}
    <Student data={sampleData}/>
    <button onClick={()=>randomName()}>Click me</button>
    </>

  );
}

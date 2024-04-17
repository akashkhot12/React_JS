import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import { Navbar } from "react-bootstrap";
import Header from "./components/Header";
import SingleBlog from "./components/SingleBlog";
import NotFound from "./components/NotFound";

export default function App() {
  const data = {
    fname:"Piyush",
    lname:"Thawrae"
  }

  const[dataFromChild,setDataFromChild] = useState(null);
  console.log(dataFromChild);
  
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */} 
        {/* implements the router for perticulaar parts and they assign for it  */}
        <Route path="/" Component={Layout}>
          <Route index path="" element={<Home data={data} setDataFromChild={setDataFromChild} /> } />
          <Route path="about" Component={About} />
          <Route path="blog" Component={Blog} />
          <Route path="blog/:id" Component={SingleBlog} />
          <Route path="*" Component={NotFound} />
        </Route>
        <Route path="/*" Component={NotFound} />

      </Routes>
    </main>
  );
}

// this router outlet is use for perticular constant base ui to all routes to be delclared.
function Layout() {
  return (
    <div className="">
      <Header />
      {/* this is must to all render outlets */}
      <Outlet />
    </div>
  );
}

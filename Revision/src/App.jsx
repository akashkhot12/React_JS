import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import { Navbar } from "react-bootstrap";
import Header from "./components/Header";
import SingleBlog from "./components/SingleBlog";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="/" Component={Layout}>
          <Route index path="" Component={Home} />
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

function Layout() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

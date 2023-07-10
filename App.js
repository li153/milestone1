import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<About />} />
            <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App

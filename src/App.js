import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import NavBar from "./Components/NavBar";

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

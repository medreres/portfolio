import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  const [height, setHeight] = useState(100);
  return (
    <>
      <Background height={height} />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<div>Some contacts here</div>} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;

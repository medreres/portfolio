import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Header/Navbar";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

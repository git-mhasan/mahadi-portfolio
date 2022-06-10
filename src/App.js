import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";
import PageNotFound from "./shared/PageNotFound";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

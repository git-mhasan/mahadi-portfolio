import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar";
import PageNotFound from "./shared/PageNotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from "./pages/Projects/Projects";



function App() {

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:id" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;

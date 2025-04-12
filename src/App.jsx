import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home"
import Skills from "./Pages/skills";
import Projects from "./Pages/projects";
import About from "./Pages/about";
import Contact from "./Pages/contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App

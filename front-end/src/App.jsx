import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from "./Pages/home"
import Underdev from "./Pages/underdev";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/under-dev" element={<Underdev />} />
      </Routes>
    </>
  )
}
export default App

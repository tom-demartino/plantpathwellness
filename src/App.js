import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Info from "./pages/info";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

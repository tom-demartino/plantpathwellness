import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Info from "./pages/info";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

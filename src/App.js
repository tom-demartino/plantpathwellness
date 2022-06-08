import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Info from "./pages/info";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router basename="plantpathwellness-website">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

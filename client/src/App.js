import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="elegant-color">
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        </div>
        <Footer />
      
    </Router>
  );
}

export default App;

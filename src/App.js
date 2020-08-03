import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            {/* <Portfolio /> */}
          </Route>
          <Route exact path="/contact">
            {/* <Contact /> */}
          </Route>
        </Switch>
        <Footer>Copyright 2020. Portfolio powered by React.</Footer>
      </Router>
    </div>
  );
}

export default App;

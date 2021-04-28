import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Education from "./components/Education";
import Providers from "./components/Providers";
import SavingsCalc from "./components/SavingsCalc";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Providers">
            <Providers />
          </Route>
          <Route exact path="/SavingsCalc">
            <SavingsCalc />
          </Route>
          <Route exact path="/Education">
            <Education />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

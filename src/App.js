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
import Upgrades from "./components/Upgrades"
import AddressForm from "./components/AddressForm"
import Audit from "./components/Audit"
import Apply from "./components/Apply"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Exposure from "./components/Exposure"
import Pace from "./components/Pace"


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
          <Route exact path="/Upgrades">
            <Upgrades/>
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
          <Route exact path="/AddressForm">
            <AddressForm />
          </Route>
          <Route exact path="/Audit">
            <Audit />
          </Route>
          <Route exact path="/Apply">
            <Apply />
          </Route>
          <Route exact path = "/Login">
            <Login />
          </Route>
          <Route exact path = "/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path = "/Exposure">
            <Exposure />
          </Route>
          <Route exact path = "/Pace">
            <Pace />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

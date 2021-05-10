//import logo from '../logo.svg';
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#home">Lattis</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/SavingsCalc">
              <Nav.Link href = "/SavingsCalc">Savings Calculator</Nav.Link>
            </Link>
            <Link to="/Education">
              <Nav.Link href="#Education">Educate</Nav.Link>
            </Link>
            <Link exact to="/Upgrades">
              <Nav.Link href="#Providers">Home Upgrades</Nav.Link>
            </Link>
            <Link to = "/Login">
            <Button href="#" variant="warning" size="lg" disabled>
              Login
            </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;

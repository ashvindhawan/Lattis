//import logo from '../logo.svg';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
 } from "react-router-dom"

const navbar = () => {
  return (
     <Router> 
    <div className = "App">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="#home">Lattis</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Link to = "/SavingsCalc">
        <Nav.Link as={Link} >Upgrade Savings Calculator</Nav.Link>
        {/* <h1>Upgrade Savings Calculator</h1> */}
        </Link>
        <Link to = "/Education">
        <Nav.Link href="#Education">Learn about PACE</Nav.Link>
        </Link>
        <Link exact to = "/Providers">
        <Nav.Link href ="#Providers">Find PACE Providers</Nav.Link>
        </Link>
        <Button href="#" variant="warning" size="lg" disabled>
          Sign Up </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  </Router>
  );
}

export default navbar;

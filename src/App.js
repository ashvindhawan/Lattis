import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Router, NavDropdown, FormControl, Form, Button, Switch, Route} from 'react-bootstrap';

function App() {
  return (
  <div className="row">
      <div className="col-md-12">
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about-us">Contact Us</Nav.Link>
                  <Nav.Link href="/contact-us">About Us</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                  </Form>
              </Navbar.Collapse>
          </Navbar>
      </div>
  </div>
    /*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Hello there, this is some text in a text area
        </p>
      </header>
    </div> */



  );
}

export default App;

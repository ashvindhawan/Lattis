import React from 'react';
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Login = () => {
    return ( 
    <div className = "App">
        <h1>Welcome back. Login to see your dashboard</h1>
        <br></br>
        <Form>
            <Form.Row className="align-items-center">
                <div>
                    <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control/>
                    </Form.Group>
                </div>
            </Form.Row>
            <Form.Row className="align-items-center">
                <div>
                    <Form.Group controlId = "formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                    </Form.Group>
                </div>
            </Form.Row>
            <Link to = "/Dashboard">
                    <Button>Log In</Button>
                </Link>
        </Form>
    </div>
    )
}
export default Login;
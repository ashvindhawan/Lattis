import React from 'react';
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";


const AddressForm = () => {
    return ( 
    <div className = "App">
        <h1>Let's get you solar!</h1>
        <br></br>
        <br></br>
        <h3>Solar energy is the future and we want to help 
            you get there quickly.</h3>
        <br></br>
        <h3>Let's start with your property address:</h3>
        <Form>
            <Form.Row>
                <div className = "w-50 p-3">
                    <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St"/>
                    </Form.Group>
                </div>
                <Link to = "/Exposure">
                    <Button>Next</Button>
                </Link>
            </Form.Row>
        </Form>
    </div>
    )
}
export default AddressForm;
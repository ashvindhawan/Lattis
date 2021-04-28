import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Form";
import "./Providers.css";



class Providers extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            firstName: "",
        }
    }

    render() {
        return ( 
            <div className = "Provider">
                <Form>
                    <Form.Row>
                        <div className = "w-25 p-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name..." value = {this.state.firstName} onChange = {this.handleFirstName}  />
                            </Form.Group>
                        </div>
                        <div className = "w-25 p-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </div>
                    </Form.Row>
                        <div className = "w-50 p-3">
                            <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                        </div>
                         <div className = "w-50 p-3">
                            <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                        </div>
                    <Form.Row className = "align-items-left">
                        <Form.Group className = "formLabel" as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group className = "formLabel" as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>PA</option>
                            <option>CA</option>
                            <option>FL</option>
                            <option>TX</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group className = "formLabel" as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>
        
                    <Form.Row className = "formLabel">
                        <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I am a homeowner." />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className = "formLabel">
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I have at least 10% equity in my home" />
                        </Form.Group>
                    </Form.Row>
                <Button variant="primary" type="submit" className = "float-left">
                    Submit
                </Button>
                </Form>
            </div>
        )
    } 
}
export default Providers;
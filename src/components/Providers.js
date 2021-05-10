import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Form";
import "./Providers.css";
import Financier from "./Financier";
import { BrowserRouter as Router, Link } from "react-router-dom";
import zip_list from "../data/zipcodes.json"


class Providers extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            firstName2: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            theState: "",
            zip: "",
            showResults: false,
            isCorrectCounty: false,
        }
    }

    handleFirstName = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleAddress1 = event => {
        this.setState({
            address1: event.target.value
        })
    }

    handleAddress2 = event => {
        this.setState({
            address2: event.target.value
        })
    }

    handleCity = event => {
        this.setState({
            city: event.target.value
        })
    }

    handleTheState = event => {
        this.setState({
            theState: event.target.value
        })
    }

    handleZip = event => {
        this.setState({
            zip: event.target.value
        })
    }


    handleEvent = event => {
        this.setState({
            firstName2: this.state.firstName,
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            theState: "",
            zip: "",
            showResults: true,
        })
        if (zip_list.includes(parseInt(this.state.zip))) {
            this.setState({
                isCorrectCounty: true,
            })
        }
       
    }

    
    render() {
        if(this.state.showResults) {
            if(this.state.isCorrectCounty) {
                return (
                    <div>
                    <h1>Welcome {this.state.firstName2}. Here are the financing options available in your area.</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button className = "p-5">$0-Down Lease</Button> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Link to = "/Pace">
                    <Button className = "p-5">PACE Loan</Button> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Link>
                    <Button className = "p-5">0-Down Loan</Button> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Button className = "p-5">Cash Purchase</Button> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <br></br>
                    <br></br>
                    <h1>Each of the above options will have their own tile, which will display statistics such as monthly payments, net savings, and applicable tax credits</h1>
                    {/* <h5>Comparing quotes is time-consuming. Let us do it for you.</h5>
                    <h5>Fill out one approval form and we can compile quotes from all the above providers.</h5>
                    <Link to = "/Apply">
                        <Button className = "p-3">Easy Apply Now</Button>
                    </Link> */}
                    </div>
                )
            } else {
                return (
                    <h1>Sorry, the PACE Provider lookup tool isn't yet ready in your area. Please check back later!</h1>
                )
            }
            
        } else {
            return ( 
                <div className = "Provider">
                    <h1>Almost there! Enter a few more pieces of information to see quotes.</h1>
                    <Form>
                        <Form.Row>
                            <div className = "w-25 p-3">
                                <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name..." value = {this.state.firstName} onChange = {this.handleFirstName}  />
                                </Form.Group>
                            </div>
                            <div className = "w-25 p-3">
                                <Form.Group as={Col}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name..." value = {this.state.lastName} onChange = {this.handleLastName} />
                                </Form.Group>
                            </div>
                        </Form.Row>
                            <div className = "w-50 p-3">
                                <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" value = {this.state.address1} onChange = {this.handleAddress1}/>
                                </Form.Group>
                            </div>
                             <div className = "w-50 p-3">
                                <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" value = {this.state.address2} onChange = {this.handleAddress2}/>
                                </Form.Group>
                            </div>
                        <Form.Row className = "align-items-left">
                            <Form.Group className = "formLabel" as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value = {this.state.city} onChange = {this.handleCity}/>
                            </Form.Group>
    
                            <Form.Group className = "formLabel" as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." value = {this.state.theState} onChange = {this.handleTheState}>
                                <option>Choose...</option>
                                <option>PA</option>
                                <option>CA</option>
                                <option>FL</option>
                                <option>TX</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group className = "formLabel" as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control value = {this.state.zip} onChange = {this.handleZip}/>
                            </Form.Group>
                        </Form.Row>
            
                        <Form.Row className = "formLabel">
                            <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I am a homeowner." />
                            </Form.Group>
                        </Form.Row>
    
                        <Form.Row className = "formLabel">
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I have at least 10% equity in my home." />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className = "formLabel">
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I have not filed for bankruptcy in the past 5 years." />
                            </Form.Group>
                        </Form.Row>

                    <Button variant="primary" type="submit" className = "float-left" onClick = {this.handleEvent}>
                        Submit
                    </Button>
                    </Form>
                </div>
            )
        }
        
    } 
}
export default Providers;
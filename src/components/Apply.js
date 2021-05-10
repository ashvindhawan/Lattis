import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Apply extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ownerName: "",
            email: "",
            phoneNumber: "",
            dob: "",
            nextPage: false,
        }
    }

    handleOwner = event => {
        this.setState({
            ownerName: event.target.value
        })
    }

    handleEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneNumber = event => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handleDob = event => {
        this.setState({
            dob: event.target.value
        })
    }

    handleEvent = event => {
        this.setState({
            ownerName: "",
            email: "",
            phoneNumber: "",
            dob: "",
            nextPage: true,
        })
    }

    render() {
        if(!this.state.nextPage) {
            return (
                <div className = "Apply">
                    <h1>Last thing!</h1>
                    <h4>Now that you have an idea of the overall cost of your system, let us compile some PACE quotes for you.</h4>
                    <Form>
                        <Form.Row>
                            <div className = "w-25 p-3">
                                <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Property Owner's Full Name" value = {this.state.ownerName} onChange = {this.handleOwner}/>
                                </Form.Group>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <div className = "w-25 p-3">
                                <Form.Group controlId = "formGridEmail">
                                <Form.Control type="text" placeholder="Email" value = {this.state.email} onChange = {this.handleFirstName} onChange = {this.handleEmail}  />
                                </Form.Group>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <div className = "w-25 p-3">
                                <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Phone Number" value = {this.state.phoneNumber} onChange = {this.handlePhoneNumber} />
                                </Form.Group>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <div className = "w-25 p-3">
                                <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Date of Birth" value = {this.state.dob} onChange = {this.handleDob}/>
                                </Form.Group>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group className = "formLabel" as={Col}>
                                <Form.Control as="select" defaultValue="Preferred Financing Term" value = {this.state.theState} onChange = {this.handleTheState}>
                                    <option>Preferred Financing Term</option>
                                    <option>10 years</option>
                                    <option>15 years</option>
                                    <option>20 years</option>
                                    <option>25 years</option>
                                    <option>30 years</option>
                                    <option>Not sure yet</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit" className = "float-left" onClick = {this.handleEvent}>
                            Submit
                        </Button>
                    </Form>
                </div>
                )
        } else {
            return (
                <div>
                    <h1>Sent! See your Dashboard in a few days for info. </h1>
                </div>
            )
        }
        
    }
}
export default Apply;
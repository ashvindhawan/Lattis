import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Form";
import "./Providers.css";

const zip_list = [94536, 94544, 94568, 94538, 94541, 94587, 94611, 94577, 94546, 94539, 94566, 94605, 94601, 94610, 94606, 94608,
    94560, 94551, 94578, 94588, 94602, 94607, 94555, 94612, 94609, 94545, 94603, 94619, 94704, 94621, 94580, 95377, 94703, 94706, 
    94702, 94618, 94579, 94705, 95391, 94709, 94707, 94502, 94542, 94552, 94708, 94710, 94604, 94537, 94540, 94662, 94623, 94586, 
    94514, 94701, 94614, 94620, 94557, 94543, 94624, 94661, 94712, 94720, 94617, 94613, 94615, 94622, 94625, 94627, 94643, 94649,
    94659, 94660, 94666]

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
        console.log("I AM HERE")
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
            firstName2: this.firstName,
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            theState: "",
            zip: "",
            showResults: true,
            isCorrectCounty: false,
        })
    }

    
    render() {
        if(this.state.showResults) {
            console.log(this.firstName2)
            return (
                <h1>HELLO</h1>
            )
        } else {
            return ( 
                <div className = "Provider">
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
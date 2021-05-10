import React from 'react';
import Button from "react-bootstrap/Button"
import { BrowserRouter as Router, Link } from "react-router-dom";

const Upgrades = () => {
    return ( 
    <div>
        <h1>Let's get this show on the road!</h1>
        <br></br>
        <h3>Making even small upgrades to your home is an awesome way
            to decrease your monthly energy bill and your carbon
            footprint.</h3> 
        <br></br>
        <h3>What are you looking to upgrade today?</h3>
        <Button className = "p-2">Lighting</Button>
        <Button className = "p-2">Windows and Doors</Button>
        <Button className = "p-2">Water System</Button>
        <Button className = "p-2">Roof and Attic</Button>
        <Button className = "p-2">Heating and Cooling</Button>
        <Link to = "/AddressForm">
            <Button className = "p-2">Solar</Button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h5>Not sure which is best for you?</h5>
        <h5>We can help you find out:</h5>
        <Link to = "/Audit">
            <Button className = "p-2">Energy Audit</Button>
        </Link>
    </div>
    )
}
export default Upgrades;
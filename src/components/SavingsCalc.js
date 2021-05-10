import React from 'react';
import Button from "react-bootstrap/Button"
import { BrowserRouter as Router, Link } from "react-router-dom";

const SavingsCalc = () => {
    return ( 
    <div className = "App">
        <h1>Savings Calculator Goes Here!</h1>
        <Link to = "/Providers">
            <Button>Check elgibility for PACE</Button>
        </Link>
    </div>
    )
}
export default SavingsCalc;
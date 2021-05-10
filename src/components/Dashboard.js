import React from 'react';
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Dashboard = () => {
    return ( 
    <div className = "Dashboard">
        <h1>Welcome back.</h1>
        <br/>
        <h3>Active Projects</h3>
        <hr/>
        <br/>
        <h1> Solar </h1>
        <br/>
        <br/>
        <Button variant = "success"> Quote </Button> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <Button variant="light">Installation </Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <Button variant="light">Complete</Button>
        <br/> 
        <br/> 
        <br/>
        <hr/> 
        <br/> <br/> <br/>
        <h3>Want to save even more?</h3>
        <Link to = "/Upgrades">
            <Button>More Home Upgrades</Button>
        </Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to = "/Education">
            <Button>Personalized Education</Button>
        </Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to = "/SavingsCalc">
            <Button>Savings Calculator</Button>
        </Link>
    </div>
    )
}
export default Dashboard;
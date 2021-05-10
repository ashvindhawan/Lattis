import React from 'react';
import Button from "react-bootstrap/Button"
import { BrowserRouter as Router, Link } from "react-router-dom";


const Home = () => {
    return ( 
    <div className = "App">
        <h1>Lattis is here to help.</h1>
        <h3>Whether you are looking to reduce your energy bill, save energy, 
            or upgrade a broken appliance, we are here to make the process
            easy and efficient.</h3>
        <br/>
        <h3>Here for the first time? Take our energy audit.</h3>
        <Link to = "/Audit">
            <Button>Energy Audit</Button>
        </Link>
        <br/>
        <h3>Been here before? Cut right to the chase.</h3>
        <Link to = "/Upgrades">
            <Button>Home Upgrades</Button>
        </Link>
        <Link to = "/Education">
            <Button>Personalized Education</Button>
        </Link>
        <Link to = "/SavingsCalc">
            <Button>Savings Calculator</Button>
        </Link>

    </div>
    )
}
export default Home;
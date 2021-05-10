import React from 'react';
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Exposure = () => {
    return ( 
    <div className = "Exposure">
        <h1>On this page, we will show the user a visually-aided explanation of their house's solar exposure and potential solar savings.</h1>
        <br/><br/>  
        <Link to = "/Providers">
        <Button>See Quotes</Button>
        </Link>  
    </div>
    
    )
}
export default Exposure;
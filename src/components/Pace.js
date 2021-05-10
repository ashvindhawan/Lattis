import React from 'react';
import Financier from "./Financier";
import financiers from "../data/financiers.json"


class Pace extends React.Component {
    render () {
        return ( 
            <div className = "PACE">
                <h1>Financiers: </h1>
                 
                    {Object.entries(financiers).map(([name, upgrades]) => {
                    return (<div><Financier name = {name} upgradeTypes = {upgrades} />
                        <br></br></div>)
                    })}
                <hr></hr>
                <br/>
                <br/> 
                <h1>Contractors: </h1>
            </div>
    )
}
}

export default Pace;
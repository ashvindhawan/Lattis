import React from 'react';
import Button from "react-bootstrap/Button"


class Financier extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            upgradeTypes: props.upgrades
        }
    }

    render() {
        var items = ""
        for(const i of this.props.upgradeTypes.values()) {
            items += i + ", "
        }
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>Upgrades Offered: {items}</h2>
            </div>
        )
    }
}

export default Financier;
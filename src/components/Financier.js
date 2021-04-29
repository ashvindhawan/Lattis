import React from 'react';

class Financier extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            upgradeTypes: props.upgrades
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>Upgrades Offered: {this.props.upgradeTypes}</h2>
            </div>
        )
    }
}

export default Financier;
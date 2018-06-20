import React, {Component} from 'react';
import RollDice from './Dice'

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return <div id='panel'>
            <RollDice/>
            <h3>Active Player</h3>
            <p>{this.props.currPlayer}</p>
        </div>
    }
}

export default Panel;
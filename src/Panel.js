import React, {Component} from 'react';
import RollDice from './Dice'

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return <div id='panel'>
            <RollDice diceRolled={this.props.diceRolled}
                      getResult={(a)=>{this.props.getResult(a)}}/>
            <div id='messageBox'>
                <h3>Active Player</h3>
                <p style={{color: this.props.playerColor}}>{this.props.currPlayer}</p>
            </div>

        </div>
    }
}

export default Panel;
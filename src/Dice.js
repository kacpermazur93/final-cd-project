import React, {Component} from 'react';
import dice from './images/dice-sprite.png';

class RollDice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 5,
        }
    }


    diceRolling = (event) => {
        //event.target.disabled = true;

        this.setState({
            counter: 0
        });

        this.intervalId = setInterval(() => {

            this.setState({
                counter: this.state.counter + 1,
                x: Math.floor(Math.random() * 6)
            });

            if (this.state.counter === 12) {
                this.props.getResult(this.state.x+1);
                clearInterval(this.intervalId);
            }

        }, 60);



    };


    render() {
        return <div id='dice-roller'>
            <div style={{
                width: '128px',
                height: '128px',
                background: `url(${dice}) ${(-128*this.state.x)}px`
            }}> </div>
            <button disabled={this.props.diceRolled}
                    onClick={(e)=>{this.diceRolling(e)}}>ROLL</button>
        </div>
    }
}

export default RollDice;
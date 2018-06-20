import React, {Component} from 'react';
import StartForm from "./StartForm";
import RollDice from './Dice'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            gameStart: false,
        }
    }

    startGame = (players) => {
        this.setState({
            gameStart: true,
            players: players
        });
    }


    render() {
        return <div className="App">
            {!this.state.gameStart ?
                <StartForm setPlayers={this.startGame}/> :
                <div>
                    <RollDice />
                </div>
            }
        </div>
    }
}

export default App;

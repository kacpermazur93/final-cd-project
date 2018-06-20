import React, {Component} from 'react';
import StartForm from "./StartForm";
import Board from "./Board";
import Panel from "./Panel"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            gameStart: false,
            currPlayerIndex: 0,
            diceRolled: false,
            pawnMoved: false
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
                <div id='main-view'>
                    <Board/>
                    <Panel currPlayer={this.state.players[this.state.currPlayerIndex]}/>
                </div>
            }
        </div>
    }
}

export default App;

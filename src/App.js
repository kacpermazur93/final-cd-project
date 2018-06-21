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
            pawnMoved: false,
            diceResult: undefined
        }
    }

    startGame = (players) => {
        this.setState({
            gameStart: true,
            players: players
        });
    }

    getResult = (diceValue) => {
        this.setState({
            diceResult: diceValue,
            diceRolled: true
        })
    }

    render() {
        return <div className="App">
            {!this.state.gameStart ?
                <StartForm setPlayers={this.startGame}/> :
                <div id='main-view'>
                    <Board/>
                    <Panel currPlayer={this.state.players[this.state.currPlayerIndex]}
                           diceRolled={this.state.diceRolled}
                           getResult={(a)=>{this.getResult(a)}}/>
                </div>
            }
        </div>
    }
}

export default App;

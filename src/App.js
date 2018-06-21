import React, {Component} from 'react';
import StartForm from "./StartForm";
import Board from "./Board";
import Panel from "./Panel"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            playersColors: [],
            gameStart: false,
            currPlayerIndex: 0,
            allInBaseRollingCounter: 0,
            diceRolled: false,
            counter6result: 0,
            pawnMoved: false,
            diceResult: undefined
        }
    }

    startGame = (players) => {
        let colors = [];
        switch (players.length) {
            case 3:
                colors = ['blue', 'green', 'yellow'];
                break;
            case 4:
                colors = ['blue', 'green', 'yellow', 'red'];
                break;
            default:
                colors = ['blue', 'yellow'];
        }
        this.setState({
            gameStart: true,
            players: players,
            playersColors: colors

        });
    }

    turnEnd(nextPlayerIndex) {
        this.setState({
            diceRolled: false,
            pawnMoved: false,
            allInBaseRollingCounter: 0,
            counter6result: 0,
            diceResult: undefined,
            currPlayerIndex: nextPlayerIndex
        });
    }


    getResult = (diceValue) => {
        this.setState({
            diceResult: diceValue,
            diceRolled: true
        })
    }


    movePawn = (event) => {
        const self = event.target;
        const nextPlayerIndex = ((this.state.currPlayerIndex + 2 > this.state.players.length) ? 0 : this.state.currPlayerIndex + 1);

        //dice rolled condition
        if (!this.state.diceRolled) {
            console.log('rzuc kostka');
            return false;
        }

        const playerColor = self.style.backgroundColor;

        //all in base and no 6 on dice
        if (document.querySelectorAll(`.${playerColor}Base > div`).length === 4 && this.state.diceResult !== 6) {
            if (this.state.allInBaseRollingCounter < 2) {
                this.setState({
                    diceRolled: false,
                    allInBaseRollingCounter: this.state.allInBaseRollingCounter + 1
                });
                console.log(this.state.allInBaseRollingCounter);
                console.log(this.state.currPlayerIndex);
                return false
            } else {
                //reset state
                this.turnEnd(nextPlayerIndex);
                return false;
            }
        }


        // click on other player pawn
        if (this.state.playersColors[this.state.currPlayerIndex] !== playerColor) {
            console.log('wybierz swój pionek');
            return false;
        }




        //click pawn in base
        if (self.parentElement.className.includes('Base')) {

            //moving pawn from base to truck
            if (this.state.diceResult === 6) {
                let startField = playerColor + 'Start';
                document.querySelector(`.${startField}`).appendChild(self);
                this.setState({
                    diceRolled: false,
                    diceResult: undefined,
                });
                return true
            } else {

                // click on pawn in base without 6
                console.log('wybierz inny pionek');
                return false;
            }
        }


        //moving on truck
        if (typeof(self.parentElement.dataset.field) !== 'undefined') {
            let newPosition = Number(self.parentElement.dataset.field) + this.state.diceResult;
            if (newPosition > 40)
                newPosition -= 40;
            document.querySelector(`[data-field='${newPosition}']`).appendChild(self);
            //reset state
            this.turnEnd(nextPlayerIndex);
            return true
        }


        this.turnEnd(nextPlayerIndex);

    }


    render() {
        return <div className="App">
            {!this.state.gameStart ?
                <StartForm setPlayers={this.startGame}/> :
                <div id='main-view'>
                    <Board diceResult={this.state.diceResult} movePawn={(e) => (this.movePawn(e))}/>
                    <Panel currPlayer={this.state.players[this.state.currPlayerIndex]}
                           diceRolled={this.state.diceRolled}
                           playerColor={this.state.playersColors[this.state.currPlayerIndex]}
                           getResult={(a) => {
                               this.getResult(a)
                           }}/>
                </div>
            }
        </div>
    }
}

export default App;

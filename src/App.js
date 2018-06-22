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


    getResult = (diceValue) => {
        this.setState({
            diceResult: diceValue,
            diceRolled: true
        })
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


    checkPawnCollision( self,  newPositionField ) {
        if (newPositionField.hasChildNodes()) {
            const opponentPawnColor = newPositionField.children[0].style.backgroundColor;
            if ( opponentPawnColor === self.style.backgroundColor) {
                console.log('niedozwolony ruch, wybierz inny pionek');
                return true;
            } else {
                const opponentBase = document.querySelectorAll(`.${opponentPawnColor}Base`);
                for (let i = 0; i < 4; i++) {
                    if (!opponentBase[i].hasChildNodes()) {
                        opponentBase[i].appendChild(newPositionField.children[0]);
                        return false;
                    }
                }
            }
        }
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
                console.log(this.state.allInBaseRollingCounter + 1);
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
                const startField = playerColor + 'Start';
                const startFieldElement = document.querySelector(`.${startField}`);

                //colision
                if( this.checkPawnCollision(self, startFieldElement) )
                    return false;

                startFieldElement.appendChild(self);
                this.setState({
                    diceRolled: false,
                    diceResult: undefined,
                });


                if (this.state.counter6result < 2) {

                    this.setState({
                        counter6result: this.state.counter6result + 1
                    });

                } else {
                    this.turnEnd(nextPlayerIndex);
                }

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

            const newPositionField = document.querySelector(`[data-field='${newPosition}']`);

            //colision
            if( this.checkPawnCollision(self, newPositionField) )
                return false;

            // if (newPositionField.hasChildNodes()) {
            //     const opponentPawnColor = newPositionField.children[0].style.backgroundColor;
            //     if ( opponentPawnColor === self.style.backgroundColor) {
            //         console.log('niedozwolony ruch, wybierz inny pionek');
            //         return false
            //     } else {
            //         const opponentBase = document.querySelectorAll(`.${opponentPawnColor}Base`);
            //         for (let i = 0; i < 4; i++) {
            //             if (!opponentBase[i].hasChildNodes()) {
            //                 opponentBase[i].appendChild(newPositionField.children[0]);
            //                 break;
            //             }
            //         }
            //     }
            // }

            newPositionField.appendChild(self);

            if (this.state.diceResult === 6 && this.state.counter6result < 2) {

                this.setState({
                    diceRolled: false,
                    counter6result: this.state.counter6result + 1
                });
                return false;

            } else {
                console.log('alalalaalala');
                this.turnEnd(nextPlayerIndex);
                return true
            }

        }


        this.turnEnd(nextPlayerIndex);

    }


    render() {
        return <div className="App">
            {!this.state.gameStart ?
                <StartForm setPlayers={this.startGame}/> :
                <div id='main-view'>
                    <Board playersColors={this.state.playersColors}
                           diceResult={this.state.diceResult} movePawn={(e) => (this.movePawn(e))}/>
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

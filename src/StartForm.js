import React, {Component} from 'react';


class StartForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlayers: 2,
            validationMessage: '',
            player1: '',
            player2: '',
            player3: '',
            player4: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let errors = [],
            players = [this.state.player1, this.state.player2];

        this.setState({validationMessage: ''});

        if( this.state.player1.length < 1 )
            errors.push(<li key="p1e">set player1 name</li>);
        if( this.state.player2.length < 1 )
            errors.push(<li key="p2e">set player2 name</li>);
        if( this.state.selectedPlayers >=3) {
            if (this.state.player3.length < 1 )
                errors.push(<li key="p3e">set player3 name</li>);
            else
                players.push(this.state.player3)
        }
        if( this.state.selectedPlayers >3) {
            if (this.state.player4.length < 1 )
                errors.push(<li key="p4e">set player4 name</li>);
            else
                players.push(this.state.player4)
        }

        if (errors.length > 0) {
            this.setState({validationMessage: <ul>{errors}</ul>});
        } else if(typeof this.props.setPlayers === 'function') {
            this.props.setPlayers(players);
        }

    }


    render() {
        return <div id='start-view'>
            <form>
                <h2>PLAYERS</h2>
                <select id='selectedPlayers'
                        onChange={(e) => this.changeHandler(e)}
                        defaultValue={2}>
                    <option value={2}>2 players</option>
                    <option value={3}>3 players</option>
                    <option value={4}>4 players</option>
                </select>
                <input id='player1'
                       type='text'
                       placeholder='Player 1'
                       onChange={(e) => this.changeHandler(e)}/>
                <input id='player2'
                       type='text'
                       placeholder='Player 2'
                       onChange={(e) => this.changeHandler(e)}/>
                {(this.state.selectedPlayers >= 3) ? <input id='player3'
                       type='text'
                       placeholder='Player 3'
                       onChange={(e) => this.changeHandler(e)}/> : ''}
                {(this.state.selectedPlayers > 3) ? <input id='player4'
                       type='text'
                       placeholder='Player 4'
                       onChange={(e) => this.changeHandler(e)}/> : ''}
                <input type='submit'
                       value='Play'
                       onClick={(e) => this.handleSubmit(e)}/>
                <div>{this.state.validationMessage}</div>
            </form>

        </div>
    }
}

export default StartForm;

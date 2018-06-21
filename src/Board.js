import React, {Component} from 'react';
import Pawn from './Pawn'
class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }



    render() {
        return <div id='board'>
            <div className="row">
                <div className='redBase'><Pawn color='red' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))}/></div>
                <div className='redBase'><Pawn color='red' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div></div>
                <div></div>
                <div data-field='39' className='track'></div>
                <div data-field='40' className='track'></div>
                <div data-field='1' className='track blueStart'></div>
                <div></div>
                <div></div>
                <div className='blueBase'><Pawn color='blue'  playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))}/></div>
                <div className='blueBase'><Pawn color='blue'  playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))}/></div>
            </div>
            <div className="row">
                <div className='redBase'><Pawn color='red'  playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))}/></div>
                <div className='redBase'><Pawn color='red'  playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))}/></div>
                <div></div>
                <div></div>
                <div data-field='38' className='track'></div>
                <div data-blue='41' className='blueHome'></div>
                <div data-field='2' className='track'></div>
                <div></div>
                <div></div>
                <div className='blueBase'><Pawn color='blue' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div className='blueBase'><Pawn color='blue' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
            </div>
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div data-field='37' className='track'></div>
                <div data-blue='42' className='blueHome'></div>
                <div data-field='3' className='track'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div data-field='36' className='track'></div>
                <div data-blue='43' className='blueHome'></div>
                <div data-field='4' className='track'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="row">
                <div data-field='31' className='track redStart'></div>
                <div data-field='32' className='track'></div>
                <div data-field='33' className='track'></div>
                <div data-field='34' className='track'></div>
                <div data-field='35' className='track'></div>
                <div data-blue='44' className='blueHome'></div>
                <div data-field='5' className='track'></div>
                <div data-field='6' className='track'></div>
                <div data-field='7' className='track'></div>
                <div data-field='8' className='track'></div>
                <div data-field='9' className='track'></div>
            </div>
            <div className="row">
                <div data-field='30' className='track'></div>
                <div  data-red='41' className='redHome'></div>
                <div  data-red='42' className='redHome'></div>
                <div  data-red='43' className='redHome'></div>
                <div  data-red='44' className='redHome'></div>
                <div></div>
                <div data-green='44' className='greenHome'></div>
                <div data-green='43' className='greenHome'></div>
                <div data-green='42' className='greenHome'></div>
                <div data-green='41' className='greenHome'></div>
                <div data-field='10' className='track'></div>
            </div>
            <div className="row">
                <div data-field='29' className='track'></div>
                <div data-field='28' className='track'></div>
                <div data-field='27' className='track'></div>
                <div data-field='26' className='track'></div>
                <div data-field='25' className='track'></div>
                <div data-yellow='44' className='yellowHome'></div>
                <div data-field='15' className='track'></div>
                <div data-field='14' className='track'></div>
                <div data-field='13' className='track'></div>
                <div data-field='12' className='track'></div>
                <div data-field='11' className='track greenStart'></div>
            </div>
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div data-field='24' className='track'></div>
                <div data-yellow='43' className='yellowHome'></div>
                <div data-field='16' className='track'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div data-field='23' className='track'></div>
                <div data-yellow='42' className='yellowHome'></div>
                <div data-field='17' className='track'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="row">
                <div  className='yellowBase'><Pawn color='yellow' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div  className='yellowBase'><Pawn color='yellow' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div></div>
                <div></div>
                <div data-field='22' className='track'></div>
                <div data-yellow='41' className='yellowHome'></div>
                <div data-field='18' className='track'></div>
                <div></div>
                <div></div>
                <div  className='greenBase'><Pawn color='green' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div  className='greenBase'><Pawn color='green' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
            </div>
            <div className="row">
                <div  className='yellowBase'><Pawn color='yellow' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div  className='yellowBase'><Pawn color='yellow' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div></div>
                <div></div>
                <div data-field='21' className='track yellowStart'></div>
                <div data-field='20' className='track'></div>
                <div data-field='19' className='track'></div>
                <div></div>
                <div></div>
                <div  className='greenBase'><Pawn color='green' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
                <div  className='greenBase'><Pawn color='green' playersColors={this.props.playersColors} move={(e) => (this.props.movePawn(e))} /></div>
            </div>

        </div>
    }
}

export default Board;
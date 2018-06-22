import React from "react";

class Pawn extends React.Component {


    render() {
        if (this.props.playersColors.indexOf(this.props.color) >= 0) {
            return <div style={{backgroundColor: this.props.color, opacity: 0.85}}
                        className={`pawn pawn-${this.props.color}`}
                        onClick={(e) => (this.props.move(e))}>

            </div>
        } else
            return null
    }
}


export default Pawn;
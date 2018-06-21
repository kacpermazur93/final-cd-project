import React from "react";

class Pawn extends React.Component {


    render() {
        return <div style={{backgroundColor: this.props.color, opacity: 0.8}}
                    className={`pawn pawn-${this.props.color}`} /*onClick={props.move}*/>

        </div>
    }
}



export default Pawn;
import React from 'react';
import './boardSquare.css';

function BoardSquare (props) {

    return (
        <div className="square">
            {props.value}
        </div>
        )
}

export default BoardSquare;
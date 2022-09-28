import React from 'react';
import './boardSquare.css';

function BoardSquare (props) {

    return (
        <div className="square" onClick={props.onClick}>
            <div className={props.resource}>
                &nbsp;
            </div>
        </div>
        )
}

export default BoardSquare;
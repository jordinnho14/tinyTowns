import React from 'react';

export default function PlayerSelector (props) {

    return (
        <div>
            <h2>Select number of players</h2>
            <button onClick={() => props.handlePlayerSelect(1)}>1</button>
            <button onClick={() => props.handlePlayerSelect(2)}>2</button>
            <button onClick={() => props.handlePlayerSelect(3)}>3</button>
            <button onClick={() => props.handlePlayerSelect(4)}>4</button>
        </div>
    )
}
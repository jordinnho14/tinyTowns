import React from 'react';

export default function ScoreScreen (props) {

    return (
    <div>
        <h1>Your score is: UNKNOWN</h1>
        <button onClick={() => props.handleReturnToBoard()}>Return to board</button>
    </div>
    )
}
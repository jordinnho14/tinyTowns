import React from 'react';

export default function FinishTown (props) {
    return (
        <button onClick={() => props.handleFinishTown()}>Finish Town</button>
    );
} 
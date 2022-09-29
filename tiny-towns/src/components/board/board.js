import React, { useState } from 'react';
import BoardSquare from './boardSquare.js';

function Board(props) {
    const renderSquare = (i) => {
        return <BoardSquare resource={squares[i]} onClick={() => handleSquareClick(i)}/>
    }

    const [squares, setSquares] = useState(Array(16).fill(null))

    const handleSquareClick = (i) => {
        if (squares[i] == null || squares[i] === '') {
            const newSquares = squares.slice();
            newSquares[i] = props.selectedResource;
            setSquares(newSquares);
        }
    }

    const handleReset = () => {
        const newSquares = Array(16).fill(null);
        setSquares(newSquares);
    }

    return (
        <div>
            <p>
                <button onClick={() => handleReset()}>Reset Board</button>
            </p>
            Selected resource is: {props.selectedResource}
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
            </div>
            <div className="board-row">
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
            </div>
            <div className="board-row">
                {renderSquare(8)}
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
            </div>
            <div className="board-row">
                {renderSquare(12)}
                {renderSquare(13)}
                {renderSquare(14)}
                {renderSquare(15)}
            </div>
        </div>
    )
}

export default Board;
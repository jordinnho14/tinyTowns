import React from 'react';
import BoardSquare from './boardSquare.js';

function renderSquare(i) {
    return <BoardSquare value={i} />
};

function Board(props) {

    return (
        <div>
            <div className="board-row">
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
            </div>
            <div className="board-row">
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div className="board-row">
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
                {renderSquare(12)}
            </div>
            <div className="board-row">
                {renderSquare(13)}
                {renderSquare(14)}
                {renderSquare(15)}
                {renderSquare(16)}
            </div>
        </div>
    )
}

export default Board;
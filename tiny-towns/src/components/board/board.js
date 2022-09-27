import React from 'react';
import BoardSquare from './boardSquare.js';

function renderSquare(i, resource) {
    return <BoardSquare value={i} resource={resource} />
};

function Board(props) {

    return (
        <div>
            <div className="board-row">
                {renderSquare(1, "stone")}
                {renderSquare(2, "brick")}
                {renderSquare(3, "wheat")}
                {renderSquare(4, "glass")}
            </div>
            <div className="board-row">
                {renderSquare(5, "wood")}
                {renderSquare(6, "")}
                {renderSquare(7, "")}
                {renderSquare(8, '')}
            </div>
            <div className="board-row">
                {renderSquare(9, '')}
                {renderSquare(10, '')}
                {renderSquare(11, '')}
                {renderSquare(12, '')}
            </div>
            <div className="board-row">
                {renderSquare(13, '')}
                {renderSquare(14, '')}
                {renderSquare(15, '')}
                {renderSquare(16, '')}
            </div>
        </div>
    )
}

export default Board;
import React from 'react';
import BoardSquare from './boardSquare.js';

// function renderSquare(i, resource) {
//     return <BoardSquare value={i} resource={resource} />
// };

function Board(props) {
    const renderSquare = ( resource) => {
        return <BoardSquare resource={resource} />
    }

    return (
        <div>
            {props.selectedResource}
            <div className="board-row">
                {renderSquare("stone")}
                {renderSquare("brick")}
                {renderSquare("wheat")}
                {renderSquare("glass")}
            </div>
            <div className="board-row">
                {renderSquare("wood")}
                {renderSquare("")}
                {renderSquare("")}
                {renderSquare('')}
            </div>
            <div className="board-row">
                {renderSquare('')}
                {renderSquare('')}
                {renderSquare('')}
                {renderSquare('')}
            </div>
            <div className="board-row">
                {renderSquare('')}
                {renderSquare('')}
                {renderSquare('')}
                {renderSquare('')}
            </div>
        </div>
    )
}

export default Board;
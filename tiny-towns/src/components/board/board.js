import React, { useState } from 'react';
import BuildingSelector from '../building-selection/BuildingSelector.js';
import BoardSquare from './boardSquare.js';

function Board(props) {

    const [squares, setSquares] = useState(Array(16).fill(null))
    const [selectedBuilding, setSelectedBuilding] = useState('')
    const [buildingMode, setBuildingMode] = useState(false);


    const renderSquare = (i) => {
        return <BoardSquare resource={squares[i]} building={selectedBuilding} onClick={() => handleSquareClick(i)}/>
    }

    const showResourceOrBuilding = () => {
        if (buildingMode) {
            return (<div>
                Building: {selectedBuilding}
            </div>)
        } else {
            return (
                <div>
                    Selected resource is: {props.selectedResource}
                </div>
            )
        }
    }

    const handleBuildingSelect = (building) => {
        setBuildingMode(true);
        setSelectedBuilding(building);
    }

    const handleSquareClick = (i) => {
        if (buildingMode) {
            window.alert("You're building a cottage!");
            setBuildingMode(false);
        }
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
            {showResourceOrBuilding()}
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
            <p>
                <BuildingSelector squares={squares} onBuildingSelect={handleBuildingSelect}/>
            </p>
        </div>
    )
}

export default Board;
import React, { useState, useEffect } from 'react';
import BuildingSelector from '../building-selection/BuildingSelector.js';
import BoardSquare from './boardSquare.js';
import { NumberOfSquaresForBuilding } from '../../building-logic/NumberOfSquaresForBuilding.js';
import { CanBuildingBeBuilt } from '../../building-logic/CanBuildingBeBuilt.js';
import { BuildingList } from '../../building-logic/BuildingList.js';

function Board(props) {
    const [buildingIsHappening, setBuildingIsHappening] = useState(false);
    const [squares, setSquares] = useState(Array(16).fill(null));
    const [selectedSquaresForBuilding, setSelectedSquaresForBuilding] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [buildingMode, setBuildingMode] = useState(false);
    const [placementMode, setPlacementMode] = useState(false);
    const [numberOfSquaresToClickForBuilding, setNumberOfSquaresToClickForBuilding] = useState();

    const renderSquare = (i) => {
        if(BuildingList.includes(squares[i])) {
            return <BoardSquare resource={'building'} selected={false} building={squares[i]} />
        } else if (selectedSquaresForBuilding.map(square => square.index).includes(i)) {
            return <BoardSquare resource={squares[i]} selected={true} onClick={() => handleSquareClick(i)} />
        } else {
            return <BoardSquare resource={squares[i]} selected={false} onClick={() => handleSquareClick(i)} />
        }
    }


    const showResourceOrBuilding = () => {
        if (buildingMode) {
            return (<div>
                Select {numberOfSquaresToClickForBuilding} more resources to build a: {selectedBuilding}
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
        setNumberOfSquaresToClickForBuilding(NumberOfSquaresForBuilding(building));
    }

    const handleSquareClick = (i) => {
        if (buildingMode) {
            if (numberOfSquaresToClickForBuilding === 1) {
                selectSquareForBuilding(i);
                setBuildingIsHappening(true);
            }
            if (squares[i] == null || squares[i] === '') {
                window.alert('You can\'t build there you fool - it\'s empty!');
            } else {
                    selectSquareForBuilding(i);
                    setNumberOfSquaresToClickForBuilding((prev) => prev - 1);
            }
        }
        
        if (placementMode) {
            const selectableIndices = selectedSquaresForBuilding.map(i => i.index);
            if (selectableIndices.includes(i)) {
                handleBuildingPlacement(i, selectableIndices);
            } else {
                window.alert('Pick one of the squares you selected for your building.')
            }
        }

        else {
            if (squares[i] == null || squares[i] === '') {
                const newSquares = squares.slice();
                newSquares[i] = props.selectedResource;
                setSquares(newSquares);
            }
        }
    }


    const handleReset = () => {
        const newSquares = Array(16).fill(null);
        setSquares(newSquares);
        setBuildingMode(false);
        setSelectedSquaresForBuilding([]);
        setPlacementMode(false);
    }

    const selectSquareForBuilding = (i) => {
        let newSelectedSquares = selectedSquaresForBuilding.slice();
        newSelectedSquares.push({index: i, resource: squares[i]});
        setSelectedSquaresForBuilding(newSelectedSquares);
    }

    const buildBuilding = () => {
        const canBuildingBeBuilt = CanBuildingBeBuilt(selectedSquaresForBuilding, selectedBuilding);
        if (canBuildingBeBuilt) {
            setNumberOfSquaresToClickForBuilding(0);
            setBuildingMode(false);
            setPlacementMode(true);
        } else {
            window.alert('that building aint right sunshine');
            setNumberOfSquaresToClickForBuilding(NumberOfSquaresForBuilding(selectedBuilding));
            setSelectedSquaresForBuilding([]);
            setBuildingIsHappening(true);
        }
    }

    const handleBuildingPlacement = (i, indices) => {
        const indicesToRemove = indices.filter(index => index !== i);

        const newSquares = squares.slice();
        newSquares[i] = selectedBuilding;
        for (const index of indicesToRemove) {
            newSquares[index] = null;
        }
        setSquares(newSquares);
        setPlacementMode(false);
        setSelectedSquaresForBuilding([]);
    }

    useEffect(() => {
        if (buildingIsHappening) {
            buildBuilding();
            setBuildingIsHappening(false);
        }
    }, [buildingIsHappening])

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
import React, { useState, useEffect } from 'react';
import BuildingSelector from '../building-selection/BuildingSelector.js';
import BoardSquare from './boardSquare.js';
import { NumberOfSquaresForBuilding } from '../../building-logic/NumberOfSquaresForBuilding.js';
import { CanBuildingBeBuilt } from '../../building-logic/CanBuildingBeBuilt.js';
import { BuildingList } from '../../building-logic/BuildingList.js';
import FinishTown from './FinishTown.js';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { replaceOneSquare, clearBoard, placeBuilding } from '../../reducers/boardSlice.js';
import './board.css';
import { IsTownFilled } from '../../functions/IsTownFilled.js';

function Board(props) {
    const [buildingIsHappening, setBuildingIsHappening] = useState(false);
    const [selectedSquaresForBuilding, setSelectedSquaresForBuilding] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [buildingMode, setBuildingMode] = useState(false);
    const [placementMode, setPlacementMode] = useState(false);
    const [numberOfSquaresToClickForBuilding, setNumberOfSquaresToClickForBuilding] = useState();
    const [isTownFilled, setIsTownFilled] =  useState(false);
    const [openFullTownModal, setOpenFullTownModal] = useState(false);

    const allBoards = useSelector((state) => state.board.value);
    const playerNumber = props.player;

    const board = allBoards[playerNumber];
    const dispatch = useDispatch();
    
    const renderSquare = (i) => {
        if(BuildingList.includes(board[i])) {
            return <BoardSquare resource={'building'} selected={false} building={board[i]} />
        } else if (selectedSquaresForBuilding.map(square => square.index).includes(i)) {
            return <BoardSquare resource={board[i]} selected={true} onClick={() => handleSquareClick(i)} />
        } else {
            return <BoardSquare resource={board[i]} selected={false} onClick={() => handleSquareClick(i)} />
        }
    }

    const showResourceOrBuilding = () => {
        if (buildingMode) {
            return (<div>
                Select {numberOfSquaresToClickForBuilding} more resources to build a: {selectedBuilding}
            </div>)
        } else if (placementMode) {
            return (<div> Select where you'd like to place your new {selectedBuilding}! </div>)
        }
        
        else {
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
            if (board[i] == null || board[i] === '') {
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
            if (board[i] == null || board[i] === '') {
                dispatch(replaceOneSquare({
                    player: props.player, 
                    index: i,
                    newValue: props.selectedResource
                }))
            }
        }
    }

    const handleReset = () => {
        dispatch(clearBoard(props.player));
        setIsTownFilled(false);
        setBuildingMode(false);
        setSelectedSquaresForBuilding([]);
        setPlacementMode(false);
    }

    const selectSquareForBuilding = (i) => {
        let newSelectedSquares = selectedSquaresForBuilding.slice();
        newSelectedSquares.push({index: i, resource: board[i]});
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
        const passBuilding = selectedBuilding;
        console.log(i);

        dispatch(placeBuilding({
            player: props.player,
            buildingIndex: i,
            indicesToRemove: indicesToRemove,
            building: passBuilding
        }));
        setPlacementMode(false);
        setSelectedSquaresForBuilding([]);
    }

    useEffect(() => {
        if (buildingIsHappening) {
            buildBuilding();
            setBuildingIsHappening(false);
        }
    }, [buildingIsHappening])

    useEffect(() => {
        if (isTownFilled) {
            setOpenFullTownModal(true);
        }
    }, [isTownFilled])

    useEffect(() => {
        if (IsTownFilled(board)) {
            setIsTownFilled(true);
        }
    }, [board])

    const handleFullTownModalClose = () => {
        setOpenFullTownModal(false);
    }


    const showModal = () => {
        return (
            <Modal
            open={openFullTownModal}
            onClose={handleFullTownModalClose}
            className='full-town-modal'
        >
            <div className="full-town-modal-interior">
                <h1>Your town is full!</h1>
                <div>You can no longer add to your town, hit 'Finish Town' to see your score.</div>
                <button className="modal-close-button" onClick={() => handleFullTownModalClose()}>close</button>
            </div>
        </Modal>
        )
    }

    const testClick = () => {

    }

    return (
        <div>
            {showModal()}
            <p>
                <button onClick={() => handleReset()}>Reset Board</button>
                <FinishTown squares={board} handleFinishTown={props.handleFinishTown} />
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
                <BuildingSelector squares={board} onBuildingSelect={handleBuildingSelect}/>
            </p>
            <button onClick={() => testClick()}>TEST</button>
        </div>
    )
}


export default Board;

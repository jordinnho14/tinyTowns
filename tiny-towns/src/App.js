import './App.css';
import React, { useState } from 'react';
import Board from './components/board/board.js';
import ResourceSelector from './components/resource-selection/ResourceSelector';
import BuildingCards from './components/building-cards/BuildingCards';
import ScoreScreen from './components/score-screen/ScoreScreen';
import PlayerSelector from './components/player-selector/PlayerSelector';
import BoardForOnePlayer from './components/boards-for-players/BoardForOnePlayer';
import BoardForTwoPlayers from './components/boards-for-players/BoardForTwoPlayers';
import BoardForThreePlayers from './components/boards-for-players/BoardForThreePlayers';
import BoardForFourPlayers from './components/boards-for-players/BoardForFourPlayers';

function App () {
  
  const [selectedResource, setSelectedResource] = useState('');
  const [isTownFinished, setIsTownFinished] = useState(false);
  const [finalBoard, setFinalBoard] = useState(Array(16).fill(null));
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);


  const onResourceSelect = (resource) => {
    setSelectedResource(resource);
  }

  const onFinishTown = (board) => {
    setIsTownFinished(true);
    setFinalBoard(board);
  }

  const onReturnToBoardPress = () => {
    setIsTownFinished(false);
  }

  const onPlayerSelect = (numberOfPlayers) => {
    setNumberOfPlayers(numberOfPlayers);
  }

  if (isTownFinished) {
    return (
      <div class="game-container">
          <ScoreScreen handleReturnToBoard={onReturnToBoardPress} board={finalBoard} />
      </div>
    )
  }

  // if (numberOfPlayers === 0) {
  //   return (
  //     <PlayerSelector handlePlayerSelect={onPlayerSelect} />
  //   )
  // }

   const boardWithOnePlayer = () => {
    return (
      <div>
        <button onClick={() => {setNumberOfPlayers(0)}}>Return to player select screen</button>
       <div class="game-container">
        <div>
          <Board selectedResource={selectedResource} handleFinishTown={onFinishTown} />
          <ResourceSelector handleSelectedResourceChange={onResourceSelect} />
        </div>
        <div>
          <BuildingCards />
        </div>
      </div>
      </div>
    );
   }

  
  switch(numberOfPlayers) {
    case 1:
      return (
        <BoardForOnePlayer 
          setNumberOfPlayers={setNumberOfPlayers}
          selectedResource={selectedResource}
          onFinishTown={onFinishTown}
          onResourceSelect={onResourceSelect}
        />
      );
    case 2:
      return (<BoardForTwoPlayers
        setNumberOfPlayers={setNumberOfPlayers}
        selectedResource={selectedResource}
        onFinishTown={onFinishTown}
        onResourceSelect={onResourceSelect}
      />);
    case 3:
      return (
      <BoardForThreePlayers
        setNumberOfPlayers={setNumberOfPlayers}
        selectedResource={selectedResource}
        onFinishTown={onFinishTown}
        onResourceSelect={onResourceSelect}
      />);
    case 4:
      return (
        <BoardForFourPlayers
        setNumberOfPlayers={setNumberOfPlayers}
        selectedResource={selectedResource}
        onFinishTown={onFinishTown}
        onResourceSelect={onResourceSelect}
      />
      );
    default:
      return (
        <PlayerSelector handlePlayerSelect={onPlayerSelect} />
      )
  }


     return (
      <div>
        <button onClick={() => {setNumberOfPlayers(0)}}>Return to player select screen</button>
       <div class="game-container">
        <div>
          <Board selectedResource={selectedResource} handleFinishTown={onFinishTown} />
          <ResourceSelector handleSelectedResourceChange={onResourceSelect} />
        </div>
        <div>
          <BuildingCards />
        </div>
      </div>
      </div>
    )
}

export default App;
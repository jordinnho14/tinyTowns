import './App.css';
import React, { useState } from 'react';
import Board from './components/board/board.js';
import ResourceSelector from './components/resource-selection/ResourceSelector';
import BuildingCards from './components/building-cards/BuildingCards';
import ScoreScreen from './components/score-screen/ScoreScreen';

function App () {
  
  const [selectedResource, setSelectedResource] = useState('');
  const [isTownFinished, setIsTownFinished] = useState(false);
  const [finalBoard, setFinalBoard] = useState(Array(16).fill(null));


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

  if (isTownFinished) {
    return (
      <div class="game-container">
          <ScoreScreen handleReturnToBoard={onReturnToBoardPress} board={finalBoard} />
      </div>
    )
  }

     return (
       <div class="game-container">
        <div>
          <Board selectedResource={selectedResource} handleFinishTown={onFinishTown} />
          <ResourceSelector handleSelectedResourceChange={onResourceSelect} />
        </div>
        <div>
          <BuildingCards />
        </div>
      </div>
    )
}

export default App;
import './App.css';
import React, { useState } from 'react';
import Board from './components/board/board.js';
import ResourceSelector from './components/resource-selection/ResourceSelector';
import BuildingCards from './components/building-cards/BuildingCards';

function App () {
  const [selectedResource, setSelectedResource] = useState('');

  const onResourceSelect = (resource) => {
    setSelectedResource(resource);
  }

     return (
       <div class="game-container">
        <div>
          <Board selectedResource={selectedResource} />
          <ResourceSelector handleSelectedResourceChange={onResourceSelect} />
        </div>
        <div>
          <BuildingCards />
        </div>
      </div>
    )
  
}

export default App;
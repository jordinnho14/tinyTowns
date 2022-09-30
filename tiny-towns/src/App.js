import './App.css';
import React, { useState } from 'react';
import Board from './components/board/Board.js';
import ResourceSelector from './components/resource-selection/ResourceSelector';
import CottageCard from './components/building-cards/CottageCard';

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
          <CottageCard />
        </div>
      </div>
    )
  
}

export default App;
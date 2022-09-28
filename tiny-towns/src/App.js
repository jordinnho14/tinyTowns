import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Board from './components/board/board.js';
import ResourceSelector from './components/resource-selection/ResourceSelector';

function App () {
  const [selectedResource, setSelectedResource] = useState('');

  const onResourceSelect = (resource) => {
    setSelectedResource(resource);
  }

     return (
      <div>
        <Board selectedResource={selectedResource} />
        <ResourceSelector handleSelectedResourceChange={onResourceSelect} />
      </div>
    )
  
}

export default App;
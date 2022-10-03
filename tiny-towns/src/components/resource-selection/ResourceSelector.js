import React from 'react';
import './resourceSelector.css';
function ResourceSelector (props) {
    
    return (
        <div>
            <div>Select next resource</div>
            <button className="wood-selection-button" onClick={() => props.handleSelectedResourceChange('wood')}>Wood</button>
            <button className="stone-selection-button" onClick={() => props.handleSelectedResourceChange('stone')}>Stone</button>
            <button className="glass-selection-button" onClick={() => props.handleSelectedResourceChange('glass')}>Glass</button>
            <button className="brick-selection-button" onClick={() => props.handleSelectedResourceChange('brick')}>Brick</button>
            <button className="wheat-selection-button" onClick={() => props.handleSelectedResourceChange('wheat')}>Wheat</button>
        </div>
    )
}

export default ResourceSelector;
import React from 'react';

function ResourceSelector (props) {
    
    return (
        <div>
            <div>Select next resource</div>
            <button onClick={() => props.handleSelectedResourceChange('wood')}>Wood</button>
            <button onClick={() => props.handleSelectedResourceChange('stone')}>Stone</button>
            <button onClick={() => props.handleSelectedResourceChange('glass')}>Glass</button>
            <button onClick={() => props.handleSelectedResourceChange('brick')}>Brick</button>
            <button onClick={() => props.handleSelectedResourceChange('wheat')}>Wheat</button>
        </div>
    )
}

export default ResourceSelector;
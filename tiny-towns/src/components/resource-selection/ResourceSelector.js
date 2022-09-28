import React from 'react';

function ResourceSelector (props) {
    
    return (
        <div>
            <div>SELECT NEXT RESOURCE</div>
            <button onClick={() => props.handleSelectedResourceChange('wood')}>wood</button>
            <button onClick={() => props.handleSelectedResourceChange('stone')}>stone</button>

        </div>
    )
}

export default ResourceSelector;
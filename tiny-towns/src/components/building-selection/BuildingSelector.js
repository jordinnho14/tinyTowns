import React from 'react';
import { CanCottageBeBuilt } from '../../building-logic/CanCottageBeBuilt';

function BuildingSelector (props) {
    return (
        <div>
            <div>Select building</div>
            <button disabled={!CanCottageBeBuilt(props.squares)}>Cottage</button>
        </div>
    )
}

export default BuildingSelector;
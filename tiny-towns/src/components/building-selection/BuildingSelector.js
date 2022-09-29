import React from 'react';
import { CanCottageBeBuilt } from '../../building-logic/cottage/CanCottageBeBuilt';

function BuildingSelector (props) {
    return (
        <div>
            <div>Select building</div>
            <button disabled={!CanCottageBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('cottage')}>Cottage</button>
        </div>
    )
}

export default BuildingSelector;
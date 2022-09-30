import React from 'react';
import { CanCottageBeBuilt } from '../../building-logic/cottage/CanCottageBeBuilt';
import { CanFarmBeBuilt } from '../../building-logic/farm/CanFarmBeBuilt';
import { CanWellBeBuilt } from '../../building-logic/well/canWellBeBuilt';

function BuildingSelector (props) {
    console.log(props.onBuildingSelect);
    return (
        <div>
            <div>Select building</div>
            <button disabled={!CanCottageBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('cottage')}>Cottage</button>
            <button disabled={!CanFarmBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('farm')}>Farm</button>
            <button disabled={!CanWellBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('well')}>Well</button>
        </div>
    )
}

export default BuildingSelector;
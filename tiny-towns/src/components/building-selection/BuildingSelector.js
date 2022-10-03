import React from 'react';
import { CanCottageBeBuilt } from '../../building-logic/cottage/CanCottageBeBuilt';
import { CanFactoryBeBuilt } from '../../building-logic/factory/CanFactoryBeBuilt';
import { CanFarmBeBuilt } from '../../building-logic/farm/CanFarmBeBuilt';
import { CanTheaterBeBuilt } from '../../building-logic/theater/canTheaterBeBuilt';
import { CanWellBeBuilt } from '../../building-logic/well/canWellBeBuilt';


function BuildingSelector (props) {
    return (
        <div>
            <div>Select building</div>
            <button disabled={!CanCottageBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('cottage')}>Cottage</button>
            <button disabled={!CanFarmBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('farm')}>Farm</button>
            <button disabled={!CanWellBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('well')}>Well</button>
            <button disabled={!CanTheaterBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('theater')}>Theater</button>
            <button disabled={!CanFactoryBeBuilt(props.squares)} onClick={() => props.onBuildingSelect('factory')}>Factory</button>
        </div>
    )
}

export default BuildingSelector;
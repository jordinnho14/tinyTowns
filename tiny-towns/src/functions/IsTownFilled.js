import { CanAnyBuildingBeBuilt } from "../building-logic/CanAnyBuildingsBeBuilt";

export const IsTownFilled = (squares) => {
    if (squares.some(i => i === null || i === '')) {
        return false;
    } else if (CanAnyBuildingBeBuilt(squares)) {
        return false;
    } else if (squares.every(i => !resourceList.includes(i))) {
        return true;
    }
    else {
        return true;
    }
}

const resourceList = [
    'wood', 'brick', 'stone', 'wheat', 'glass'
];

import { CanAnyBuildingBeBuilt } from "../building-logic/CanAnyBuildingsBeBuilt";

export const IsTownFilled = (squares) => {
    console.log('checking!')
    if (squares.some(i => i === null || i === '')) {
        return false;
    } else if (CanAnyBuildingBeBuilt(squares)) {
        console.log('Still got some buildings you can build ere sunshine');
        return false;
    } else if (squares.every(i => !resourceList.includes(i))) {
        console.log('Full o buildings!');
        return true;
    }
    else {
        console.log('full town laddo!');
        return true;
    }
}

const resourceList = [
    'wood', 'brick', 'stone', 'wheat', 'glass'
];

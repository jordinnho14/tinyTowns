
import { CanCottageBeBuiltFromSelectedSquares } from "./cottage/CanCottageBeBuiltFromSelectedSquares"

export const CanBuildingBeBuilt = (selectedSquaresForBuilding, building) => {
    switch (building) {
        case 'cottage':
            return CanCottageBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        default:
            return false;
    }
}
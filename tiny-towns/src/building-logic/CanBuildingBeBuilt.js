import { CanCottageBeBuiltFromSelectedSquares } from "./cottage/CanCottageBeBuiltFromSelectedSquares"
import { CanWellBeBuiltFromSelectedSquare } from "./well/CanWellBeBuiltFromSelectedSquares";

export const CanBuildingBeBuilt = (selectedSquaresForBuilding, building) => {
    switch (building) {
        case 'cottage':
            return CanCottageBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        case 'well':
            return CanWellBeBuiltFromSelectedSquare(selectedSquaresForBuilding);
        default:
            return false;
    }
}
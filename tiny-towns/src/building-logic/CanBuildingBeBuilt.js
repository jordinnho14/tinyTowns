import { CanCottageBeBuiltFromSelectedSquares } from "./cottage/CanCottageBeBuiltFromSelectedSquares"
import { CanFarmBeBuiltFromSelectedSquares } from "./farm/CanFarmBeBuiltFromSelectedSquares";
import { CanWellBeBuiltFromSelectedSquare } from "./well/CanWellBeBuiltFromSelectedSquares";

export const CanBuildingBeBuilt = (selectedSquaresForBuilding, building) => {
    switch (building) {
        case 'cottage':
            return CanCottageBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        case 'well':
            return CanWellBeBuiltFromSelectedSquare(selectedSquaresForBuilding);
        case 'farm':
            return CanFarmBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        default:
            return false;
    }
}
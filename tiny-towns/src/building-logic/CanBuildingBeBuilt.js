import { CanCottageBeBuiltFromSelectedSquares } from "./cottage/CanCottageBeBuiltFromSelectedSquares"
import { CanFarmBeBuiltFromSelectedSquares } from "./farm/CanFarmBeBuiltFromSelectedSquares";
import { CanTheaterBeBuiltFromSelectedSquares } from "./theater/CanTheaterBeBuiltFromSelectedSquares";
import { CanWellBeBuiltFromSelectedSquare } from "./well/CanWellBeBuiltFromSelectedSquares";
import { CanFactoryBeBuiltFromSelectedSquares } from "./factory/CanFactoryBeBuiltFromSelectedSquares";
import { CanTavernBeBuiltFromSelectedSquares } from "./tavern/CanTavernBeBuiltFromSelectedSquares";
export const CanBuildingBeBuilt = (selectedSquaresForBuilding, building) => {
    switch (building) {
        case 'cottage':
            return CanCottageBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        case 'well':
            return CanWellBeBuiltFromSelectedSquare(selectedSquaresForBuilding);
        case 'farm':
            return CanFarmBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        case 'theater':
            return CanTheaterBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        case 'factory':
            return CanFactoryBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        case 'tavern':
            return CanTavernBeBuiltFromSelectedSquares(selectedSquaresForBuilding);
        default:
            return false;
    }
}
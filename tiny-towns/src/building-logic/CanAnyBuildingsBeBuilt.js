import { CanChapelBeBuilt } from "./chapel/CanChapelBeBuilt"
import { CanCottageBeBuilt } from "./cottage/CanCottageBeBuilt"
import { CanFactoryBeBuilt } from "./factory/CanFactoryBeBuilt"
import { CanFarmBeBuilt } from "./farm/CanFarmBeBuilt"
import { CanTavernBeBuilt } from "./tavern/CanTavernBeBuilt"
import { CanTheaterBeBuilt } from "./theater/canTheaterBeBuilt"
import { CanWellBeBuilt } from "./well/canWellBeBuilt"

export const CanAnyBuildingBeBuilt = (squares) => {
    return (
        CanChapelBeBuilt(squares)
        ||
        CanCottageBeBuilt(squares)
        ||
        CanFactoryBeBuilt(squares)
        ||
        CanFarmBeBuilt(squares)
        ||
        CanTavernBeBuilt(squares)
        ||
        CanTheaterBeBuilt(squares)
        ||
        CanWellBeBuilt(squares)
    );
}
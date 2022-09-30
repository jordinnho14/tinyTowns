import { BuildCottage } from "./cottage/BuildCottage"

export const BuildBuilding = (building) => {
    switch (building) {
        case 'cottage':
            return BuildCottage();
        default:
            window.alert("building not found");
            return ('error');
    }
}
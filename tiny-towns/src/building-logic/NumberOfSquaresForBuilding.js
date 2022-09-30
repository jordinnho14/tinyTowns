export const NumberOfSquaresForBuilding = (building) => {
    switch (building) {
        case 'cottage':
            return 3;
        default:
            return 0;    
    }
}
export const NumberOfSquaresForBuilding = (building) => {
    switch (building) {
        case 'cottage':
            return 3;
        case 'farm':
            return 4;
        case 'well':
            return 2;
        default:
            return 0;    
    }
}
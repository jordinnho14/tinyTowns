export const NumberOfSquaresForBuilding = (building) => {
    switch (building) {
        case 'cottage':
            return 3;
        case 'farm':
            return 4;
        case 'well':
            return 2;
        case 'theater':
            return 4;
        case 'factory':
            return 5;
        case 'tavern':
            return 3;
        case 'chapel':
            return 4;
        default:
            return 0;    
    }
}
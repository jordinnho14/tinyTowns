export const CanWellBeBuiltFromSelectedSquare = (selectedSquares) => {
    if (numberOfWoodSquares(selectedSquares) !== 1 || numberOfStoneSquares(selectedSquares) !== 1) {
        return false;
    }

    const woodIndex = getWoodIndex(selectedSquares);
    const stoneIndex = getStoneIndex(selectedSquares);

    switch(woodIndex) {
        case 0:
            return (stoneIndex === 1 || stoneIndex === 4);
        case 1:
            return (stoneIndex === 0 || stoneIndex === 2 || stoneIndex === 5);
        case 2:
            return (stoneIndex === 1 || stoneIndex === 3 || stoneIndex === 6);
        case 3:
            return (stoneIndex === 2 || stoneIndex === 7);
        case 4:
            return (stoneIndex === 0 || stoneIndex === 5 || stoneIndex === 8);
        case 5:
            return (stoneIndex === 1 || stoneIndex === 4 || stoneIndex === 6 || stoneIndex === 9);
        case 6:
            return (stoneIndex === 2 || stoneIndex === 5 || stoneIndex === 7 || stoneIndex === 10);
        case 7:
            return (stoneIndex === 3 || stoneIndex === 6 || stoneIndex === 11);
        case 8: 
            return (stoneIndex === 4 || stoneIndex === 9 || stoneIndex === 12);
        case 9:
            return (stoneIndex === 5 || stoneIndex === 8 || stoneIndex === 10 || stoneIndex === 13);
        case 10:
            return (stoneIndex === 6 || stoneIndex === 9 || stoneIndex === 11 || stoneIndex === 14);
        case 11:
            return (stoneIndex === 11 || stoneIndex === 10 || stoneIndex === 15);
        case 12:
            return (stoneIndex === 8 || stoneIndex === 13);
        case 13:
            return (stoneIndex === 9 || stoneIndex === 12 || stoneIndex === 14);
        case 14:
            return (stoneIndex === 10 || stoneIndex === 13 || stoneIndex === 15);
        case 15:
            return (stoneIndex === 11 || stoneIndex === 14);
        default: 
            return false;
        
    }
}

const numberOfWoodSquares = (selectedSquares) => {
    let count = 0;
    for (let i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wood') {
            count++;
        }
    }
    return count;
}

const numberOfStoneSquares = (selectedSquares) => {
    let count = 0;
    for (let i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'stone') {
            count++;
        }
    }
    return count;
}

const getStoneIndex = (selectedSquares) => {
    let index;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'stone') {
            index = selectedSquares[i].index;
        }
    }
    return index;
}

const getWoodIndex = (selectedSquares) => {
    let index;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wood') {
            index = selectedSquares[i].index;
        }
    }
    return index;
}
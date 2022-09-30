export const CanCottageBeBuiltFromSelectedSquares = (selectedSquares) => {
    if (
        numberOfSelectedGlassSquares(selectedSquares) !== 1 || 
        numberOfSelectedBrickSquares(selectedSquares) !== 1 ||
        numberOfSelectedWheatSquares(selectedSquares) !== 1
    ) {
        return false;
    }

    const glassIndex = getGlassIndex(selectedSquares);
    const wheatIndex = getWheatIndex(selectedSquares);
    const brickIndex = getBrickIndex(selectedSquares);

    switch(glassIndex) {
        case 0:
            return (
                (brickIndex === 4 && wheatIndex === 1)
                ||
                (brickIndex === 1 && wheatIndex === 4)
            );
        case 1:
            return (
                (brickIndex === 0 && wheatIndex === 5)
                ||
                (brickIndex === 5 && wheatIndex === 0)
                ||
                (brickIndex === 2 && wheatIndex === 5)
                ||
                (brickIndex === 5 && wheatIndex === 2)
            );
        case 2:
            return (
                (brickIndex === 1 && wheatIndex === 6)
                ||
                (brickIndex === 6 && wheatIndex === 1)
                ||
                (brickIndex === 3 && wheatIndex === 6)
                ||
                (brickIndex === 6 && wheatIndex === 3)
            );
        case 3:
            return (
                (brickIndex === 2 && wheatIndex === 7)
                ||
                (brickIndex === 7 && wheatIndex === 2)
            );
        case 4:
            return (
                (brickIndex === 0 && wheatIndex === 5)
                ||
                (brickIndex === 5 && wheatIndex === 0)
                ||
                (brickIndex === 8 && wheatIndex === 5)
                ||
                (brickIndex === 5 && wheatIndex === 8)
            );   
        case 5:
            return (
                (brickIndex === 1 && wheatIndex === 4)
                ||
                (brickIndex === 4 && wheatIndex === 1)
                ||
                (brickIndex === 1 && wheatIndex === 6)
                ||
                (brickIndex === 6 && wheatIndex === 1)
                ||
                (brickIndex === 4 && wheatIndex === 9)
                ||
                (brickIndex === 9 && wheatIndex === 4)
                ||
                (brickIndex === 6 && wheatIndex === 9)
                ||
                (brickIndex === 9 && wheatIndex === 6)
            );
        case 6:
            return (
                (brickIndex === 2 && wheatIndex === 5)
                ||
                (brickIndex === 5 && wheatIndex === 2)
                ||
                (brickIndex === 2 && wheatIndex === 7)
                ||
                (brickIndex === 7 && wheatIndex === 2)
                ||
                (brickIndex === 5 && wheatIndex === 10)
                ||
                (brickIndex === 10 && wheatIndex === 5)
                ||
                (brickIndex === 7 && wheatIndex === 10)
                ||
                (brickIndex === 10 && wheatIndex === 7)
            );
        case 7:
            return (
                (brickIndex === 3 && wheatIndex === 6)
                ||
                (brickIndex === 6 && wheatIndex === 3)
                ||
                (brickIndex === 11 && wheatIndex === 6)
                ||
                (brickIndex === 6 && wheatIndex === 11)
            );
        case 8:
            return (
                (brickIndex === 9 && wheatIndex === 4)
                ||
                (brickIndex === 4 && wheatIndex === 9)
                ||
                (brickIndex === 12 && wheatIndex === 9)
                ||
                (brickIndex === 9 && wheatIndex === 12)
            );
        case 9:
            return (
                (brickIndex === 5 && wheatIndex === 8)
                ||
                (brickIndex === 8 && wheatIndex === 5)
                ||
                (brickIndex === 10 && wheatIndex === 5)
                ||
                (brickIndex === 5 && wheatIndex === 10)
                ||
                (brickIndex === 8 && wheatIndex === 13)
                ||
                (brickIndex === 13 && wheatIndex === 8)
                ||
                (brickIndex === 10 && wheatIndex === 13)
                ||
                (brickIndex === 13 && wheatIndex === 10)
            );  
        case 10:
            return (
                (brickIndex === 6 && wheatIndex === 9)
                ||
                (brickIndex === 9 && wheatIndex === 6)
                ||
                (brickIndex === 9 && wheatIndex === 14)
                ||
                (brickIndex === 14 && wheatIndex === 9)
                ||
                (brickIndex === 6 && wheatIndex === 11)
                ||
                (brickIndex === 11 && wheatIndex === 6)
                ||
                (brickIndex === 11 && wheatIndex === 14)
                ||
                (brickIndex === 14 && wheatIndex === 11)
            );  
        case 11:
            return (
                (brickIndex === 7 && wheatIndex === 10)
                ||
                (brickIndex === 10 && wheatIndex === 7)
                ||
                (brickIndex === 10 && wheatIndex === 15)
                ||
                (brickIndex === 15 && wheatIndex === 10)
            );
        case 12:
            return (
                (brickIndex === 8 && wheatIndex === 13)
                ||
                (brickIndex === 13 && wheatIndex === 8)
            );
        case 13:
            return (
                (brickIndex === 12 && wheatIndex === 9)
                ||
                (brickIndex === 9 && wheatIndex === 12)
                ||
                (brickIndex === 9 && wheatIndex === 14)
                ||
                (brickIndex === 14 && wheatIndex === 9)
            );
        case 14:
            return (
                (brickIndex === 13 && wheatIndex === 10)
                ||
                (brickIndex === 10 && wheatIndex === 13)
                ||
                (brickIndex === 10 && wheatIndex === 15)
                ||
                (brickIndex === 15 && wheatIndex === 10)
            );  
        case 15:
            return (
                (brickIndex === 11 && wheatIndex === 14)
                ||
                (brickIndex === 14 && wheatIndex === 11)
            );
        default:
            return false;                

    }
}

const getGlassIndex = (selectedSquares) => {
    let index;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'glass') {
            index = selectedSquares[i].index;
        }
    }
    return index;
}

const getBrickIndex = (selectedSquares) => {
    let index;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'brick') {
            index = selectedSquares[i].index;
        }
    }
    return index;
}

const getWheatIndex = (selectedSquares) => {
    let index;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wheat') {
            index = selectedSquares[i].index;
        }
    }
    return index;
}

const numberOfSelectedGlassSquares = (selectedSquares) => {
    let count = 0;
    for (let i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'glass') {
            count++;
        }
    }
    return count;
}

const numberOfSelectedBrickSquares = (selectedSquares) => {
    let count = 0;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'brick') {
            count++;
        }
    }
    return count;
}

const numberOfSelectedWheatSquares = (selectedSquares) => {
    let count = 0;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wheat') {
            count++;
        }
    }
    return count;
}

export const CanTheaterBeBuiltFromSelectedSquares = (squares) => {
    if (
        numberOfSelectedGlassSquares(squares) !== 1 ||
        numberOfSelectedStoneSquares(squares) !== 1 ||
        numberOfSelectedWoodSquares(squares) !== 2
    ) {
        return false;
    }

    const glassIndex = getGlassIndex(squares);
    const stoneIndex = getStoneIndex(squares);
    const woodIndices = getWoodIndices(squares);

    switch (glassIndex) {
        case 0:
            return false;
        case 1:
            return (stoneIndex === 5 && woodIndices.includes(0) && woodIndices.includes(2));
        case 2:
            return (stoneIndex === 6 && woodIndices.includes(1) && woodIndices.includes(3));
        case 3:
            return false;
        case 4:
            return (stoneIndex === 5 && woodIndices.includes(0) && woodIndices.includes(8));
        case 5:
            return (
                (stoneIndex === 1 && woodIndices.includes(4) && woodIndices.includes(6))
                ||
                (stoneIndex === 4 && woodIndices.includes(1) && woodIndices.includes(9))
                ||
                (stoneIndex === 6 && woodIndices.includes(1) && woodIndices.includes(9))
                ||
                (stoneIndex === 9 && woodIndices.includes(4) && woodIndices.includes(6))
            );
        case 6:
            return (
                (stoneIndex === 2 && woodIndices.includes(5) && woodIndices.includes(7))
                ||
                (stoneIndex === 5 && woodIndices.includes(2) && woodIndices.includes(10))
                ||
                (stoneIndex === 7 && woodIndices.includes(2) && woodIndices.includes(10))
                ||
                (stoneIndex === 10 && woodIndices.includes(5) && woodIndices.includes(7))                
            );
        case 7:
            return (stoneIndex === 6 && woodIndices.includes(3) && woodIndices.includes(11))
        case 8:
            return (stoneIndex === 9 && woodIndices.includes(4) && woodIndices.includes(12))
        case 9:
            return (
                (stoneIndex === 5 && woodIndices.includes(8) && woodIndices.includes(10))
                ||
                (stoneIndex === 8 && woodIndices.includes(5) && woodIndices.includes(13))
                ||
                (stoneIndex === 10 && woodIndices.includes(5) && woodIndices.includes(13))
                ||
                (stoneIndex === 13 && woodIndices.includes(8) && woodIndices.includes(10))
            );
        case 10:
            return (
                (stoneIndex === 6 && woodIndices.includes(9) && woodIndices.includes(11))
                ||
                (stoneIndex === 9 && woodIndices.includes(6) && woodIndices.includes(14))
                ||
                (stoneIndex === 11 && woodIndices.includes(6) && woodIndices.includes(14))
                ||
                (stoneIndex === 14 && woodIndices.includes(9) && woodIndices.includes(11))
            );
        case 11:
            return (stoneIndex === 10 && woodIndices.includes(7) && woodIndices.includes(15));
        case 12:
            return false;
        case 13:
            return (stoneIndex === 9 && woodIndices.includes(12) && woodIndices.includes(14))
        case 14:
            return (stoneIndex === 10 && woodIndices.includes(13) && woodIndices.includes(15))
        default:
            return false;
    }
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

const numberOfSelectedStoneSquares = (selectedSquares) => {
    let count = 0;
    for (let i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'stone') {
            count++;
        }
    }
    return count;
}

const numberOfSelectedWoodSquares = (selectedSquares) => {
    let count = 0;
    for (let i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wood') {
            count++;
        }
    }
    return count;
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

const getStoneIndex = (selectedSquares) => {
    let index;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'stone') {
            index = selectedSquares[i].index;
        }
    }
    return index;
}

const getWoodIndices = (selectedSquares) => {
    const index = [];
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wood') {
            index.push(selectedSquares[i].index);
        }
    }
    return index;
}
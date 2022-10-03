export const CanTavernBeBuiltFromSelectedSquares = (squares) => {
    if (numberOfSelectedGlassSquares(squares) !== 1 || numberOfSelectedBrickSquares(squares) !== 2) {
        return false;
    }

    const glassIndex = getGlassIndex(squares);
    const brickIndices = getBrickIndices(squares);

    switch (glassIndex) {
        case 0:
            return (
                (brickIndices.includes(1) && brickIndices.includes(2))
                ||
                (brickIndices.includes(4) && brickIndices.includes(8))
            );
        case 1:
            return (
                (brickIndices.includes(2) && brickIndices.includes(3))
                ||
                (brickIndices.includes(5) && brickIndices.includes(9))
            );
        case 2:
            return (
                (brickIndices.includes(0) && brickIndices.includes(1))
                ||
                (brickIndices.includes(6) && brickIndices.includes(10))
            );
        case 3:
            return (
                (brickIndices.includes(1) && brickIndices.includes(2))
                ||
                (brickIndices.includes(7) && brickIndices.includes(11))
            );
        case 4:
            return (
                (brickIndices.includes(8) && brickIndices.includes(12))
                ||
                (brickIndices.includes(5) && brickIndices.includes(6))
            );
        case 5:
            return (
                (brickIndices.includes(6) && brickIndices.includes(7))
                ||
                (brickIndices.includes(13) && brickIndices.includes(9))
            );
        case 6:
            return (
                (brickIndices.includes(4) && brickIndices.includes(5))
                ||
                (brickIndices.includes(10) && brickIndices.includes(14))
            );
        case 7:
            return (
                (brickIndices.includes(5) && brickIndices.includes(6))
                ||
                (brickIndices.includes(11) && brickIndices.includes(15))
            );
        case 8:
            return (
                (brickIndices.includes(0) && brickIndices.includes(4))
                ||
                (brickIndices.includes(9) && brickIndices.includes(10))
            );
        case 9:
            return (
                (brickIndices.includes(1) && brickIndices.includes(5))
                ||
                (brickIndices.includes(10) && brickIndices.includes(11))
            );
        case 10:
            return (
                (brickIndices.includes(2) && brickIndices.includes(6))
                ||
                (brickIndices.includes(8) && brickIndices.includes(9))
            );
        case 11:
            return (
                (brickIndices.includes(3) && brickIndices.includes(7))
                ||
                (brickIndices.includes(10) && brickIndices.includes(9))
            );
        case 12:
            return (
                (brickIndices.includes(4) && brickIndices.includes(8))
                ||
                (brickIndices.includes(13) && brickIndices.includes(14))
            );
        case 13:
            return (
                (brickIndices.includes(5) && brickIndices.includes(9))
                ||
                (brickIndices.includes(14) && brickIndices.includes(15))
            );
        case 14:
            return (
                (brickIndices.includes(6) && brickIndices.includes(10))
                ||
                (brickIndices.includes(12) && brickIndices.includes(13))
            );
        case 15:
            return (
                (brickIndices.includes(7) && brickIndices.includes(11))
                ||
                (brickIndices.includes(13) && brickIndices.includes(14))
            );
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

const numberOfSelectedBrickSquares = (selectedSquares) => {
    let count = 0;
    for (let i = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'brick') {
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

const getBrickIndices = (selectedSquares) => {
    const index = [];
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'brick') {
            index.push(selectedSquares[i].index);
        }
    }
    return index;
}
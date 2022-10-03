export const CanFactoryBeBuiltFromSelectedSquares = (squares) => {
    if (
        numberOfSelectedWoodSquares(squares) !== 1 ||
        numberOfSelectedBrickSquares(squares) !== 2 ||
        numberOfSelectedStoneSquares(squares) !== 2
    ) {
        return false;
    }

    const woodIndex = getWoodIndex(squares);
    const brickIndices = getBrickIndices(squares);
    const stoneIndices = getStoneIndices(squares);

    switch (woodIndex) {
        case 0:
            return (
                (brickIndices.includes(1) && stoneIndices.includes(5) && stoneIndices.includes(9) && brickIndices.includes(13))
                ||
                (brickIndices.includes(4) && stoneIndices.includes(5) && stoneIndices.includes(6) && brickIndices.includes(7))
            );
        case 1:
            return (
                (brickIndices.includes(0) && stoneIndices.includes(4) && stoneIndices.includes(8) && brickIndices.includes(12))
                ||
                (brickIndices.includes(2) && stoneIndices.includes(6) && stoneIndices.includes(10) && brickIndices.includes(14))
            );
        case 2:
            return (
                (brickIndices.includes(3) && stoneIndices.includes(7) && stoneIndices.includes(11) && brickIndices.includes(15))
                ||
                (brickIndices.includes(1) && stoneIndices.includes(5) && stoneIndices.includes(9) && brickIndices.includes(13))
            );
        case 3:
            return (
                (brickIndices.includes(2) && stoneIndices.includes(6) && stoneIndices.includes(10) && brickIndices.includes(14))
                ||
                (brickIndices.includes(7) && stoneIndices.includes(6) && stoneIndices.includes(5) && brickIndices.includes(4))
            );
        case 4:
            return (
                (brickIndices.includes(0) && stoneIndices.includes(1) && stoneIndices.includes(2) && brickIndices.includes(3))
                ||
                (brickIndices.includes(8) && stoneIndices.includes(9) && stoneIndices.includes(10) && brickIndices.includes(11))
            );
        case 7:
            return (
                (brickIndices.includes(3) && stoneIndices.includes(2) && stoneIndices.includes(1) && brickIndices.includes(0))
                ||
                (brickIndices.includes(11) && stoneIndices.includes(10) && stoneIndices.includes(9) && brickIndices.includes(8))
            );
        case 8:
            return (
                (brickIndices.includes(4) && stoneIndices.includes(5) && stoneIndices.includes(6) && brickIndices.includes(7))
                ||
                (brickIndices.includes(12) && stoneIndices.includes(13) && stoneIndices.includes(14) && brickIndices.includes(15))
            );
        case 11:
            return (
                (brickIndices.includes(7) && stoneIndices.includes(6) && stoneIndices.includes(5) && brickIndices.includes(4))
                ||
                (brickIndices.includes(15) && stoneIndices.includes(14) && stoneIndices.includes(13) && brickIndices.includes(12))
            );
        case 12:
            return (
                (brickIndices.includes(8) && stoneIndices.includes(9) && stoneIndices.includes(10) && brickIndices.includes(11))
                ||
                (brickIndices.includes(13) && stoneIndices.includes(9) && stoneIndices.includes(5) && brickIndices.includes(1))
            );
        case 13:
            return (
                (brickIndices.includes(12) && stoneIndices.includes(8) && stoneIndices.includes(4) && brickIndices.includes(0))
                ||
                (brickIndices.includes(14) && stoneIndices.includes(10) && stoneIndices.includes(6) && brickIndices.includes(2))
            );
        case 14:
            return (
                (brickIndices.includes(13) && stoneIndices.includes(9) && stoneIndices.includes(5) && brickIndices.includes(1))
                ||
                (brickIndices.includes(15) && stoneIndices.includes(11) && stoneIndices.includes(7) && brickIndices.includes(3))
            );
        case 15:
            return (
                (brickIndices.includes(11) && stoneIndices.includes(10) && stoneIndices.includes(9) && brickIndices.includes(8))
                ||
                (brickIndices.includes(14) && stoneIndices.includes(10) && stoneIndices.includes(6) && brickIndices.includes(2))
            );
        default:
            return false;
    }
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

const numberOfSelectedWoodSquares = (selectedSquares) => {
    let count = 0;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wood') {
            count++;
        }
    }
    return count;
}

const numberOfSelectedStoneSquares = (selectedSquares) => {
    let count = 0;
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'stone') {
            count++;
        }
    }
    return count;
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

const getStoneIndices = (selectedSquares) => {
    const index = [];
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'stone') {
            index.push(selectedSquares[i].index);
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
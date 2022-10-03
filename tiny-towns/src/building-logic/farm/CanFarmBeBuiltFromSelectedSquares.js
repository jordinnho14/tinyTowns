export const CanFarmBeBuiltFromSelectedSquares = (squares) => {
    if (numberOfSelectedWheat(squares) !== 2 || numberOfSelectedWood(squares) !== 2) {
        return false;
    }

    const woodIndices = getWoodIndices(squares);
    const wheatIndices = getWheatIndices(squares);

    if (woodIndices.includes(0) && woodIndices.includes(1)) {
        return (
            wheatIndices.includes(4) && wheatIndices.includes(5)
            );
    } else if (woodIndices.includes(0) && woodIndices.includes(4)) {
        return (
            wheatIndices.includes(1) && wheatIndices.includes(5)
            );
    } else if (woodIndices.includes(1) && woodIndices.includes(2)) {
        return (
            wheatIndices.includes(5) && wheatIndices.includes(6)
            );
    } else if (woodIndices.includes(1) && woodIndices.includes(5)) {
        return (
            (wheatIndices.includes(0) && wheatIndices.includes(4)) ||
            (wheatIndices.includes(2) && wheatIndices.includes(6))
            );
    } else if (woodIndices.includes(2) && woodIndices.includes(3)) {
        return (
            (wheatIndices.includes(6) && wheatIndices.includes(7))
            );
    } else if (woodIndices.includes(2) && woodIndices.includes(6)) {
        return (
            (wheatIndices.includes(1) && wheatIndices.includes(5)) ||
            (wheatIndices.includes(3) && wheatIndices.includes(7))
            );
    } else if (woodIndices.includes(3) && woodIndices.includes(7)) {
        return (
            (wheatIndices.includes(2) && wheatIndices.includes(6))
            );
    } else if (woodIndices.includes(4) && woodIndices.includes(5)) {
        return (
            (wheatIndices.includes(0) && wheatIndices.includes(1)) ||
            (wheatIndices.includes(8) && wheatIndices.includes(9))
            );
    } else if (woodIndices.includes(4) && woodIndices.includes(8)) {
        return (
            (wheatIndices.includes(5) && wheatIndices.includes(9))
            );
    } else if (woodIndices.includes(5) && woodIndices.includes(6)) {
        return (
            (wheatIndices.includes(1) && wheatIndices.includes(2)) ||
            (wheatIndices.includes(9) && wheatIndices.includes(10))
            );
    } else if (woodIndices.includes(5) && woodIndices.includes(9)) {
        return (
            (wheatIndices.includes(4) && wheatIndices.includes(8)) ||
            (wheatIndices.includes(6) && wheatIndices.includes(10))
            );
    } else if (woodIndices.includes(6) && woodIndices.includes(7)) {
        return (
            (wheatIndices.includes(2) && wheatIndices.includes(3)) ||
            (wheatIndices.includes(10) && wheatIndices.includes(11))
            );
    } else if (woodIndices.includes(6) && woodIndices.includes(10)) {
        return (
            (wheatIndices.includes(5) && wheatIndices.includes(9)) ||
            (wheatIndices.includes(7) && wheatIndices.includes(11))
            );
    } else if (woodIndices.includes(7) && woodIndices.includes(11)) {
        return (
            (wheatIndices.includes(6) && wheatIndices.includes(10))
            );
    } else if (woodIndices.includes(8) && woodIndices.includes(9)) {
        return (
            (wheatIndices.includes(4) && wheatIndices.includes(5)) ||
            (wheatIndices.includes(12) && wheatIndices.includes(13))
            );
    } else if (woodIndices.includes(8) && woodIndices.includes(12)) {
        return (
            (wheatIndices.includes(9) && wheatIndices.includes(13))
            );
    } else if (woodIndices.includes(9) && woodIndices.includes(10)) {
        return (
            (wheatIndices.includes(5) && wheatIndices.includes(6)) ||
            (wheatIndices.includes(13) && wheatIndices.includes(14))
            );
    } else if (woodIndices.includes(9) && woodIndices.includes(13)) {
        return (
            (wheatIndices.includes(8) && wheatIndices.includes(12)) ||
            (wheatIndices.includes(10) && wheatIndices.includes(14))
            );
    } else if (woodIndices.includes(10) && woodIndices.includes(11)) {
        return (
            (wheatIndices.includes(6) && wheatIndices.includes(7)) ||
            (wheatIndices.includes(14) && wheatIndices.includes(15))
            );
    } else if (woodIndices.includes(10) && woodIndices.includes(14)) {
        return (
            (wheatIndices.includes(9) && wheatIndices.includes(13)) ||
            (wheatIndices.includes(11) && wheatIndices.includes(15))
            );
    } else if (woodIndices.includes(11) && woodIndices.includes(15)) {
        return (
            (wheatIndices.includes(10) && wheatIndices.includes(14))
            );
    } else if (woodIndices.includes(12) && woodIndices.includes(13)) {
        return (
            (wheatIndices.includes(8) && wheatIndices.includes(9))
            );
    } else if (woodIndices.includes(13) && woodIndices.includes(14)) {
        return (
            (wheatIndices.includes(9) && wheatIndices.includes(10))
            );
    } else if (woodIndices.includes(14) && woodIndices.includes(15)) {
        return (
            (wheatIndices.includes(10) && wheatIndices.includes(11))
            );
    }
}

const numberOfSelectedWood = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].resource === 'wood') {
            count++;
        }
    }
    return count;
}

const numberOfSelectedWheat = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].resource === 'wheat') {
            count++;
        }
    }
    return count;
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

const getWheatIndices = (selectedSquares) => {
    const index = [];
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'wheat') {
            index.push(selectedSquares[i].index);
        }
    }
    return index;
}
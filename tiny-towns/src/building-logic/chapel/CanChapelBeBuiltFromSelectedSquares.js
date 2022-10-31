export const CanChapelBeBuiltFromSelectedSquares = (squares) => {
    if (
        numberOfSelectedGlassSquares(squares) !== 2 || numberOfSelectedStoneSquares(squares) !== 2  
    ) {
        return false;
    }

    const glassIndices = getGlassIndices(squares);
    const stoneIndices = getStoneIndices(squares);

    if (glassIndices[0] === 0) {
        return (
            (stoneIndices.includes(4) && glassIndices.includes(5)  && stoneIndices.includes(6) ) ||
            (stoneIndices.includes(1) && glassIndices.includes(5)  && stoneIndices.includes(9)))
    } else if (glassIndices[0] === 1) {
        return (
            (stoneIndices.includes(0) && glassIndices.includes(4)  && stoneIndices.includes(8)) ||
            (stoneIndices.includes(2) && glassIndices.includes(6)  && stoneIndices.includes(10)) ||
            (stoneIndices.includes(5) && glassIndices.includes(6)  && stoneIndices.includes(7))
        )
    } else if (glassIndices[0] === 2) {
        return (
            (stoneIndices.includes(3) && glassIndices.includes(7) && stoneIndices.includes(11)) ||
            (stoneIndices.includes(1) && glassIndices.includes(5)  && stoneIndices.includes(9)) ||
            (stoneIndices.includes(6) && glassIndices.includes(5) && stoneIndices.includes(4) )
        )
    } else if (glassIndices[0] === 3) {
        return (
            (stoneIndices.includes(2) && glassIndices.includes(6)  && stoneIndices.includes(10)) ||
            (stoneIndices.includes(7) && glassIndices.includes(6)  && stoneIndices.includes(5) )
        )
    } else if (glassIndices[0] === 4) {
        return (
            (stoneIndices.includes(0) && glassIndices.includes(1) && stoneIndices.includes(2) ) ||
            (stoneIndices.includes(5) && glassIndices.includes(9) && stoneIndices.includes(13)) ||
            (stoneIndices.includes(8) && glassIndices.includes(9) && stoneIndices.includes(10)) ||
            (stoneIndices.includes(0) && glassIndices.includes(1) && stoneIndices.includes(8))
        )
    } else if (glassIndices[0] === 5) {
        return (
            (stoneIndices.includes(1) && glassIndices.includes(2) && stoneIndices.includes(3) ) ||
            (stoneIndices.includes(4) && glassIndices.includes(8) && stoneIndices.includes(12))||
            (stoneIndices.includes(6) && glassIndices.includes(10) && stoneIndices.includes(14)) ||
            (stoneIndices.includes(9) && glassIndices.includes(10) && stoneIndices.includes(11))
        )
    } else if (glassIndices[0] === 6) {
        return (
            (stoneIndices.includes(2) && glassIndices.includes(1) && stoneIndices.includes(0)) ||
            (stoneIndices.includes(5) && glassIndices.includes(9) && stoneIndices.includes(13)) ||
            (stoneIndices.includes(7) && glassIndices.includes(11) && stoneIndices.includes(15)) ||
            (stoneIndices.includes(10) && glassIndices.includes(9) && stoneIndices.includes(8))
        )
    } else if (glassIndices[0] === 7) {
        return (
            (stoneIndices.includes(3) && glassIndices.includes(2)  && stoneIndices.includes(1) ) ||
            (stoneIndices.includes(6) && glassIndices.includes(10) && stoneIndices.includes(14)) ||
            (stoneIndices.includes(11) && glassIndices.includes(10) && stoneIndices.includes(9))
        )
    } else if (glassIndices[0] === 8) {
        return (
            (stoneIndices.includes(4) && glassIndices.includes(5)  && stoneIndices.includes(9)) ||
            (stoneIndices.includes(9) && glassIndices.includes(5)  && stoneIndices.includes(1) ) ||
            (stoneIndices.includes(12) && glassIndices.includes(13)  && stoneIndices.includes(14))
        )
    } else if (glassIndices[0] === 9) {
        return (
            (stoneIndices.includes(5)  && glassIndices.includes(6)  && stoneIndices.includes(7)) ||
            (stoneIndices.includes(8) && glassIndices.includes(4)  && stoneIndices.includes(0)) ||
            (stoneIndices.includes(13) && glassIndices.includes(14)  && stoneIndices.includes(15)) ||
            (stoneIndices.includes(10) && glassIndices.includes(6)  && stoneIndices.includes(2) )
        )
    } else if (glassIndices[0] === 10) {
        return (
            (stoneIndices.includes(11) && glassIndices.includes(7)  && stoneIndices.includes(3) ) ||
            (stoneIndices.includes(6)  && glassIndices.includes(5)  && stoneIndices.includes(4) ) ||
            (stoneIndices.includes(9) && glassIndices.includes(5)  && stoneIndices.includes(1) ) ||
            (stoneIndices.includes(14) && glassIndices.includes(13)  && stoneIndices.includes(12))
        )
    } else if (glassIndices[0] === 11) {
        return (
            (stoneIndices.includes(10) && glassIndices.includes(6)  && stoneIndices.includes(2) ) ||
            (stoneIndices.includes(7) && glassIndices.includes(6)  && stoneIndices.includes(5) ) ||
            (stoneIndices.includes(15) && glassIndices.includes(14)  && stoneIndices.includes(13))
        )
    } else if (glassIndices[0] === 12) {
        return (
            (stoneIndices.includes(8) && glassIndices.includes(9)  && stoneIndices.includes(10)) ||
            (stoneIndices.includes(13) && glassIndices.includes(9)  && stoneIndices.includes(5) )
        )
    } else if (glassIndices[0] === 13) {
        return (
            (stoneIndices.includes(9) && glassIndices.includes(10)  && stoneIndices.includes(11)) ||
            (stoneIndices.includes(14) && glassIndices.includes(10)  && stoneIndices.includes(6) ) ||
            (stoneIndices.includes(12) && glassIndices.includes(8)  && stoneIndices.includes(4) )
        )
    } else if (glassIndices[0] === 14) {
        return (
            (stoneIndices.includes(10) && glassIndices.includes(9)  && stoneIndices.includes(8)) ||
            (stoneIndices.includes(13) && glassIndices.includes(9)  && stoneIndices.includes(5) ) ||
            (stoneIndices.includes(14) && glassIndices.includes(10) && stoneIndices.includes(6)) ||
            (stoneIndices.includes(13) && glassIndices.includes(11) && stoneIndices.includes(15))
        )
    } else if (glassIndices[0] === 15) {
        return (
            (stoneIndices.includes(11) && glassIndices.includes(10)  && stoneIndices.includes(9)) ||
            (stoneIndices.includes(14) && glassIndices.includes(10)  && stoneIndices.includes(6) )
        )
    } else {
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

const getGlassIndices = (selectedSquares) => {
    const index = [];
    for (let i  = 0; i < selectedSquares.length; i++) {
        if (selectedSquares[i].resource === 'glass') {
            index.push(selectedSquares[i].index);
        }
    }

    index.sort(function(a,b){return a-b});
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
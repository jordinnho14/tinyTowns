export const GetWellScore = (board) => {
    const wellIndices = getWellIndices(board);
    const cottageIndices = getCottageIndices(board);

    let wellScore = 0;

    for (let i in wellIndices) {
        wellScore += getScoreForWell(wellIndices[i], cottageIndices);
    }

    return wellScore;
}

const getWellIndices = (board) => {
    let wellIndices = [];

    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'well') {
            wellIndices.push(i)
        }
    }
    return wellIndices;
}

const getCottageIndices = (board) => {
    let cottageIndices = [];

    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'cottage') {
            cottageIndices.push(i);
        }
    }

    return cottageIndices;
}

const getScoreForWell = (i, cottageIndices) => {
    let wellScore = 0;
    switch (i) {
        case 0:
            wellScore = well0(cottageIndices);
            break;
        case 1:
            wellScore = well1(cottageIndices);
            break;
        case 2:
            wellScore = well2(cottageIndices);
            break;
        case 3:
            wellScore = well3(cottageIndices);
            break;
        case 4:
            wellScore = well4(cottageIndices);
            break;
        case 5:
            wellScore = well5(cottageIndices);
            break;
        case 6:
            wellScore = well6(cottageIndices);
            break;
        case 7:
            wellScore = well7(cottageIndices);
            break;
        case 8:
            wellScore = well8(cottageIndices);
            break;
        case 9:
            wellScore = well9(cottageIndices);
            break;
        case 10:
            wellScore = well10(cottageIndices);
            break;
        case 11:
            wellScore = well11(cottageIndices);
            break;
        case 12:
            wellScore = well12(cottageIndices);
            break;
        case 13:
            wellScore = well13(cottageIndices);
            break;
        case 14:
            wellScore = well14(cottageIndices);
            break;
        case 15:
            wellScore = well15(cottageIndices);
            break;
        default:
    }

    return wellScore;
}

const well0 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 1 || cottageIndices[i] === 4) {
            score ++;
        }
    }
    return score;
}

const well1 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 0 || cottageIndices[i] === 2 || cottageIndices[i] === 5) {
            score ++;
        }
    }
    return score;
}

const well2 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 1 || cottageIndices[i] === 3 || cottageIndices[i] === 6) {
            score ++;
        }
    }
    return score;
}

const well3 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 2 || cottageIndices[i] === 7) {
            score ++;
        }
    }
    return score;
}

const well4 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 0 || cottageIndices[i] === 5 || cottageIndices[i] === 8) {
            score ++;
        }
    }
    return score;
}

const well5 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 1 || cottageIndices[i] === 4 || cottageIndices[i] === 6 || cottageIndices[i] === 9) {
            score ++;
        }
    }
    return score;
}

const well6 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 7 || cottageIndices[i] === 2 || cottageIndices[i] === 5 || cottageIndices[i] === 10) {
            score ++;
        }
    }
    return score;
}

const well7 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 3 || cottageIndices[i] === 6 || cottageIndices[i] === 11) {
            score ++;
        }
    }
    return score;
}

const well8 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 4 || cottageIndices[i] === 9 || cottageIndices[i] === 12) {
            score ++;
        }
    }
    return score;
}

const well9 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 5 || cottageIndices[i] === 8 || cottageIndices[i] === 10 || cottageIndices[i] === 13) {
            score ++;
        }
    }
    return score;
}

const well10 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 6 || cottageIndices[i] === 9 || cottageIndices[i] === 11 || cottageIndices[i] === 14) {
            score ++;
        }
    }
    return score;
}

const well11 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 7 || cottageIndices[i] === 10 || cottageIndices[i] === 15) {
            score ++;
        }
    }
    return score;
}

const well12 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 8 || cottageIndices[i] === 13) {
            score ++;
        }
    }
    return score;
}

const well13 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 9 || cottageIndices[i] === 12 || cottageIndices[i] === 14) {
            score ++;
        }
    }
    return score;
}

const well14 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 10 || cottageIndices[i] === 13 || cottageIndices[i] === 15) {
            score ++;
        }
    }
    return score;
}
const well15 = (cottageIndices) => {
    let score = 0;
    for (let i in cottageIndices) {
        if (cottageIndices[i] === 11 || cottageIndices[i] === 14) {
            score ++;
        }
    }
    return score;
}
import { BuildingList } from "../../../building-logic/BuildingList";

export const GetTheaterScore = (board) => {
    const theaterIndices = getTheaterIndices(board);

    let theaterScore = 0;

    for (let i in theaterIndices) {
        theaterScore += getScoreForTheater(theaterIndices[i], board);
    }
    return theaterScore;
}

const getTheaterIndices = (board) => {
    let theaterIndices = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'theater') {
            theaterIndices.push(i)
        }
    }
    return theaterIndices;
}

const getScoreForTheater = (i, board) => {
    switch (i) {
        case 0:
            return theater0(board);
        case 1:
            return theater1(board);
        case 2:
            return theater2(board);
        case 3:
            return theater3(board);
        case 4:
            return theater4(board);
        case 5:
            return theater5(board);
        case 6:
            return theater6(board);
        case 7:
            return theater7(board);
        case 8:
            return theater8(board);
        case 9:
            return theater9(board);
        case 10:
            return theater10(board);
        case 11:
            return theater11(board);
        case 12:
            return theater12(board);
        case 13:
            return theater13(board);
        case 14:
            return theater14(board);
        case 15:
            return theater15(board);
        default: 
            return 0;
    }
}

const theater0 = (board) => {
    const rowAndColumn = [1,2,3,4,8,12];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater1 = (board) => {
    const rowAndColumn = [0,2,3,5,9,13];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater2 = (board) => {
    const rowAndColumn = [0,1,3,6,10,14];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater3 = (board) => {
    const rowAndColumn = [0,1,2,7,11,15];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater4 = (board) => {
    const rowAndColumn = [0,8,12,5,6,7];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater5 = (board) => {
    const rowAndColumn = [1,9,13,4,6,7];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater6 = (board) => {
    const rowAndColumn = [2,10,14,4,5,7];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater7 = (board) => {
    const rowAndColumn = [3,11,15,4,5,6];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater8 = (board) => {
    const rowAndColumn = [9,10,11,0,4,12];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater9 = (board) => {
    const rowAndColumn = [8,10,11,1,5,13];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater10 = (board) => {
    const rowAndColumn = [8,9,11,2,6,14];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater11 = (board) => {
    const rowAndColumn = [3,7,15,0,4,8];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater12 = (board) => {
    const rowAndColumn = [13,14,15,0,4,8];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater13 = (board) => {
    const rowAndColumn = [1,5,9,12,14,15];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater14 = (board) => {
    const rowAndColumn = [12,13,15,2,6,10];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

const theater15 = (board) => {
    const rowAndColumn = [12,13,14,3,7,11];
    let buildingsInRowAndColumn = new Set();

    for (let i in rowAndColumn) {
        if (board[rowAndColumn[i]] === null) {
            continue;
        }

        if (BuildingList.includes(board[i])) {
            buildingsInRowAndColumn.add(board[i]);
        }
    }
    return buildingsInRowAndColumn.size;
}

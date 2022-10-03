export const CanTheaterBeBuilt = (squares) => {

    if (!squares) {
        return false;
    }
    if (
        numberOfGlassSquares(squares) < 1 ||
        numberOfStoneSquares(squares) < 1 ||
        numberOfWoodSquares(squares) < 2
    ) {
        return false;
    }


    let glassSquares = [];

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'glass') {
            glassSquares.push(i);
        }
    }

    return glassSquares.some(glassIndex => canTheaterBeBuiltPerSquare(glassIndex, squares));
}


const canTheaterBeBuiltPerSquare = (index, board) => {
    switch (index) {
        case 0:
            return false;
        case 1:
            return glass1(board);
        case 2:
            return glass2(board);
        case 3:
            return false;
        case 4:
            return glass4(board);   
        case 5:
            return glass5(board);
        case 6:
            return glass6(board);
        case 7:
            return glass7(board);
        case 8:
            return glass8(board);
        case 9:
            return glass9(board);   
        case 10:
            return glass10(board);  
        case 11:
            return glass11(board);
        case 12:
            return false;
        case 13:
            return glass13(board);
        case 14:
            return glass14(board);   
        case 15:
            return false;
        default:
            return false;                
    }
}

const glass1 = (board) => {
    if (board[5] === 'stone') {
        return (board[0] === 'wood' && board[2] === 'wood');
    }
    return false;
}

const glass2 = (board) => {
    if (board[6] === 'stone') {
        return (board[1] === 'wood' && board[3] === 'wood');
    }
    return false;
}

const glass4 = (board) => {
    if (board[5] === 'stone') {
        return (board[0] === 'wood' && board[8] === 'wood');
    }
    return false;
}

const glass5 = (board) => {
    if (board[1] === 'stone') {
        return (board[4] === 'wood' && board[6] === 'wood');
    }

    if (board[4] === 'stone') {
        return (board[1] === 'wood' && board[9] === 'wood');
    }

    if (board[6] === 'stone') {
        return (board[1] === 'wood' && board[9] === 'wood');
    }

    if (board[9] === 'stone') {
        return (board[4] === 'wood' && board[6] === 'wood');
    }
    return false;
}

const glass6 = (board) => {
    if (board[2] === 'stone') {
        return (board[5] === 'wood' && board[7] === 'wood');
    }
    if (board[5] === 'stone') {
        return (board[2] === 'wood' && board[10] === 'wood');
    }
    if (board[7] === 'stone') {
        return (board[2] === 'wood' && board[10] === 'wood');
    }
    if (board[10] === 'stone') {
        return (board[5] === 'wood' && board[7] === 'wood');
    }
    return false;
}

const glass7 = (board) => {
    if (board[6] === 'stone') {
        return (board[3] === 'wood' && board[11] === 'wood');
    }
    return false;
}

const glass8 = (board) => {
    if (board[9] === 'stone') {
        return (board[4] === 'wood' && board[12] === 'wood');
    }
    return false;
}

const glass9 = (board) => {
    if (board[5] === 'stone') {
        return (board[8] === 'wood' && board[10] === 'wood');
    }
    if (board[8] === 'stone') {
        return (board[5] === 'wood' && board[13] === 'wood');
    }
    if (board[10] === 'stone') {
        return (board[5] === 'wood' && board[13] === 'wood');
    }
    if (board[13] === 'stone') {
        return (board[8] === 'wood' && board[10] === 'wood');
    }
}

const glass10 = (board) => {
    if (board[6] === 'stone') {
        return (board[9] === 'wood' && board[11] === 'wood');
    }
    if (board[9] === 'stone') {
        return (board[6] === 'wood' && board[14] === 'wood');
    }
    if (board[11] === 'stone') {
        return (board[6] === 'wood' && board[14] === 'wood');
    }
    if (board[14] === 'stone') {
        return (board[9] === 'wood' && board[11] === 'wood');
    }
    return false;
}

const glass11 = (board) => {
    if (board[10] === 'stone') {
        return (board[7] === 'wood' && board[15] === 'wood');
    }
    return false;
}

const glass13 = (board) => {
    if (board[9] === 'stone') {
        return (board[12] === 'wood' && board[14] === 'wood');
    }
    return false;
}

const glass14 = (board) => {
    if (board[10] === 'stone') {
        return (board[13] === 'wood' && board[15] === 'wood');
    }
    return false;
}


const numberOfWoodSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'wood') {
            count++;
        }
    }
    return count;
}

const numberOfStoneSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'stone') {
            count++;
        }
    }
    return count;
}

const numberOfGlassSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'glass') {
            count++;
        }
    }
    return count;
}

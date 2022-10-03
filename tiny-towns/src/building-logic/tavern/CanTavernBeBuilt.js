export const CanTavernBeBuilt = (squares) => {
    if (
        numberOfBrickSquares(squares) < 2 ||
        numberOfGlassSquares(squares) < 1
    ) {
        return false;
    }

    let glassSquares = [];
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'glass') {
            glassSquares.push(i);
        }
    }

    return glassSquares.some(glassIndex => canTavernBeBuiltPerSquare(glassIndex, squares));
}

const canTavernBeBuiltPerSquare = (index, board) => {
    switch (index) {
        case 0:
            return glass0(board);
        case 1:
            return glass1(board);
        case 2:
            return glass2(board);
        case 3:
            return glass3(board);
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
            return glass12(board);
        case 13:
            return glass13(board);
        case 14:
            return glass14(board);   
        case 15:
            return glass15(board);
        default:
            return false;                
    }
}

const glass0 = (board) => {
    return (
        (board[1] === 'brick' && board[2] === 'brick')
        ||
        (board[4] === 'brick' && board[8] === 'brick')
    );
}

const glass1 = (board) => {
    return (
        (board[2] === 'brick' && board[3] === 'brick')
        ||
        (board[5] === 'brick' && board[9] === 'brick')
    );
}

const glass2 = (board) => {
    return (
        (board[0] === 'brick' && board[1] === 'brick')
        ||
        (board[6] === 'brick' && board[10] === 'brick')
    );
}

const glass3 = (board) => {
    return (
        (board[1] === 'brick' && board[2] === 'brick')
        ||
        (board[7] === 'brick' && board[11] === 'brick')
    );
}

const glass4 = (board) => {
    return (
        (board[8] === 'brick' && board[12] === 'brick')
        ||
        (board[5] === 'brick' && board[6] === 'brick')
    );
}

const glass5 = (board) => {
    return (
        (board[6] === 'brick' && board[7] === 'brick')
        ||
        (board[9] === 'brick' && board[13] === 'brick')
    );
}

const glass6 = (board) => {
    return (
        (board[4] === 'brick' && board[5] === 'brick')
        ||
        (board[10] === 'brick' && board[14] === 'brick')
    );
}
const glass7 = (board) => {
    return (
        (board[5] === 'brick' && board[6] === 'brick')
        ||
        (board[11] === 'brick' && board[15] === 'brick')
    );
}

const glass8 = (board) => {
    return (
        (board[0] === 'brick' && board[4] === 'brick')
        ||
        (board[9] === 'brick' && board[10] === 'brick')
    );
}

const glass9 = (board) => {
    return (
        (board[1] === 'brick' && board[5] === 'brick')
        ||
        (board[10] === 'brick' && board[11] === 'brick')
    );
}

const glass10 = (board) => {
    return (
        (board[2] === 'brick' && board[6] === 'brick')
        ||
        (board[8] === 'brick' && board[9] === 'brick')
    );
}

const glass11 = (board) => {
    return (
        (board[3] === 'brick' && board[7] === 'brick')
        ||
        (board[9] === 'brick' && board[10] === 'brick')
    );
}

const glass12 = (board) => {
    return (
        (board[4] === 'brick' && board[8] === 'brick')
        ||
        (board[13] === 'brick' && board[14] === 'brick')
    );
}

const glass13 = (board) => {
    return (
        (board[5] === 'brick' && board[9] === 'brick')
        ||
        (board[14] === 'brick' && board[15] === 'brick')
    );
}

const glass14 = (board) => {
    return (
        (board[6] === 'brick' && board[10] === 'brick')
        ||
        (board[12] === 'brick' && board[13] === 'brick')
    );
}

const glass15 = (board) => {
    return (
        (board[7] === 'brick' && board[11] === 'brick')
        ||
        (board[13] === 'brick' && board[14] === 'brick')
    );
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

const numberOfBrickSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'brick') {
            count++;
        }
    }
    return count;
}
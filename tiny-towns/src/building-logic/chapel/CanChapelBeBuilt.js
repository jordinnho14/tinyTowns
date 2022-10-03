export const CanChapelBeBuilt = (squares) => {
    if (
        numberOfGlassSquares(squares) < 2 || numberOfStoneSquares(squares) < 2
    ) {
        return false;
    }

    let glassSquares = [];
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'glass') {
            glassSquares.push(i);
        }
    }

    return glassSquares.some(index => canChapelBeBuiltPerSquare(index, squares));
}

const canChapelBeBuiltPerSquare = (index, board) => {
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
        (board[4] === 'stone' && board[5] === 'glass' && board[6] === 'stone')
        ||
        (board[1] === 'stone' && board[5] === 'glass' && board[9] === 'stone')
    );
}

const glass1 = (board) => {
    return (
        (board[0] === 'stone' && board[4] === 'glass' && board[8] === 'stone')
        ||
        (board[2] === 'stone' && board[6] === 'glass' && board[10] === 'stone')
        ||
        (board[5] === 'stone' && board[6] === 'glass' && board[7] === 'stone')
    );
}

const glass2 = (board) => {
    return (
        (board[3] === 'stone' && board[7] === 'glass' && board[11] === 'stone')
        ||
        (board[1] === 'stone' && board[5] === 'glass' && board[9] === 'stone')
        ||
        (board[6] === 'stone' && board[5] === 'glass' && board[4] === 'stone')
    );
}

const glass3 = (board) => {
    return (
        (board[2] === 'stone' && board[6] === 'glass' && board[10] === 'stone')
        ||
        (board[7] === 'stone' && board[6] === 'glass' && board[5] === 'stone')
    );
}

const glass4 = (board) => {
    return (
        (board[0] === 'stone' && board[1] === 'glass' && board[2] === 'stone')
        ||
        (board[5] === 'stone' && board[9] === 'glass' && board[13] === 'stone')
        ||
        (board[8] === 'stone' && board[9] === 'glass' && board[10] === 'stone')
    );
}

const glass5 = (board) => {
    return (
        (board[1] === 'stone' && board[2] === 'glass' && board[3] === 'stone')
        ||
        (board[4] === 'stone' && board[8] === 'glass' && board[12] === 'stone')
        ||
        (board[6] === 'stone' && board[10] === 'glass' && board[14] === 'stone')
        ||
        (board[9] === 'stone' && board[10] === 'glass' && board[11] === 'stone')
    );
}

const glass6 = (board) => {
    return (
        (board[2] === 'stone' && board[1] === 'glass' && board[0] === 'stone')
        ||
        (board[5] === 'stone' && board[9] === 'glass' && board[13] === 'stone')
        ||
        (board[7] === 'stone' && board[11] === 'glass' && board[15] === 'stone')
        ||
        (board[10] === 'stone' && board[9] === 'glass' && board[8] === 'stone')
    );
}

const glass7 = (board) => {
    return (
        (board[3] === 'stone' && board[2] === 'glass' && board[1] === 'stone')
        ||
        (board[6] === 'stone' && board[10] === 'glass' && board[14] === 'stone')
        ||
        (board[11] === 'stone' && board[10] === 'glass' && board[9] === 'stone')
    );
}

const glass8 = (board) => {
    return (
        (board[4] === 'stone' && board[5] === 'glass' && board[9] === 'stone')
        ||
        (board[9] === 'stone' && board[5] === 'glass' && board[1] === 'stone')
        ||
        (board[12] === 'stone' && board[13] === 'glass' && board[14] === 'stone')
    );
}

const glass9 = (board) => {
    return (
        (board[5] === 'stone' && board[6] === 'glass' && board[7] === 'stone')
        ||
        (board[8] === 'stone' && board[4] === 'glass' && board[0] === 'stone')
        ||
        (board[13] === 'stone' && board[14] === 'glass' && board[15] === 'stone')
        ||
        (board[10] === 'stone' && board[6] === 'glass' && board[2] === 'stone')
    );
}

const glass10 = (board) => {
    return (
        (board[11] === 'stone' && board[7] === 'glass' && board[3] === 'stone')
        ||
        (board[6] === 'stone' && board[5] === 'glass' && board[4] === 'stone')
        ||
        (board[9] === 'stone' && board[5] === 'glass' && board[1] === 'stone')
        ||
        (board[14] === 'stone' && board[13] === 'glass' && board[12] === 'stone')
    );
}

const glass11 = (board) => {
    return (
        (board[10] === 'stone' && board[6] === 'glass' && board[2] === 'stone')
        ||
        (board[7] === 'stone' && board[6] === 'glass' && board[5] === 'stone')
        ||
        (board[15] === 'stone' && board[14] === 'glass' && board[13] === 'stone')
    );
}

const glass12 = (board) => {
    return (
        (board[8] === 'stone' && board[9] === 'glass' && board[10] === 'stone')
        ||
        (board[13] === 'stone' && board[9] === 'glass' && board[5] === 'stone')
    );
}

const glass13 = (board) => {
    return (
        (board[9] === 'stone' && board[10] === 'glass' && board[11] === 'stone')
        ||
        (board[14] === 'stone' && board[10] === 'glass' && board[6] === 'stone')
        ||
        (board[12] === 'stone' && board[8] === 'glass' && board[4] === 'stone')
    );
}

const glass14 = (board) => {
    return (
        (board[10] === 'stone' && board[9] === 'glass' && board[8] === 'stone')
        ||
        (board[13] === 'stone' && board[9] === 'glass' && board[5] === 'stone')
        ||
        (board[14] === 'stone' && board[10] === 'glass' && board[6] === 'stone')
    );
}

const glass15 = (board) => {
    return (
        (board[11] === 'stone' && board[10] === 'glass' && board[9] === 'stone')
        ||
        (board[14] === 'stone' && board[10] === 'glass' && board[6] === 'stone')
    );
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
export const CanWellBeBuilt = (squares) => {
    if (!squares.includes('wood') || !squares.includes('stone')) {
        return false;
    }

    let woodSquares = [];

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'wood') {
            woodSquares.push(i);
        }
    }

    return woodSquares.some(woodIndex => canWellBeBuiltPerSquare(woodIndex, squares));
}

const canWellBeBuiltPerSquare = (squareIndex, board) => {
    switch (squareIndex) {
        case 0:
            return wood0(board);
        case 1:
            return wood1(board);
        case 2:
            return wood2(board);
        case 3:
            return wood3(board);
        case 4:
            return wood4(board);   
        case 5:
            return wood5(board);
        case 6:
            return wood6(board);
        case 7:
            return wood7(board);
        case 8:
            return wood8(board);
        case 9:
            return wood9(board);   
        case 10:
            return wood10(board);  
        case 11:
            return wood11(board);
        case 12:
            return wood12(board);
        case 13:
            return wood13(board);
        case 14:
            return wood14(board);   
        case 15:
            return wood15(board);
        default:
            return false;                
    }
}

const wood0 = (board) => {
    return (board[1] === 'stone' || board[4] === 'stone');
}

const wood1 = (board) => {
    return (board[0] === 'stone' || board[2] === 'stone' || board[5] === 'stone');
}

const wood2 = (board) => {
    return (board[1] === 'stone' || board[3] === 'stone' || board[6] === 'stone');
}

const wood3 = (board) => {
    return (board[2] === 'stone' || board[7] === 'stone');
}

const wood4 = (board) => {
    return (board[0] === 'stone' || board[5] === 'stone' || board[8] === 'stone');
}

const wood5 = (board) => {
    return (board[1] === 'stone' || board[4] === 'stone' || board[6] === 'stone' || board[9] === 'stone');
}

const wood6 = (board) => {
    return (board[2] === 'stone' || board[5] === 'stone' || board[7] === 'stone' || board[10] === 'stone');
}

const wood7 = (board) => {
    return (board[3] === 'stone' || board[6] === 'stone' || board[11] === 'stone');
}

const wood8 = (board) => {
    return (board[4] === 'stone' || board[9] === 'stone' || board[12] === 'stone');
}

const wood9 = (board) => {
    return (board[5] === 'stone' || board[8] === 'stone' || board[10] === 'stone' || board[13] === 'stone');
}

const wood10 = (board) => {
    return (board[6] === 'stone' || board[9] === 'stone' || board[11] === 'stone' || board[14] === 'stone');
}

const wood11 = (board) => {
    return (board[7] === 'stone' || board[10] === 'stone' || board[15] === 'stone');
}

const wood12 = (board) => {
    return (board[8] === 'stone' || board[13] === 'stone');
}

const wood13 = (board) => {
    return (board[9] === 'stone' || board[12] === 'stone' || board[14] === 'stone');
}

const wood14 = (board) => {
    return (board[10] === 'stone' || board[13] === 'stone' || board[15] === 'stone');
}

const wood15 = (board) => {
    return (board[11] === 'stone' || board[14] === 'stone');
}
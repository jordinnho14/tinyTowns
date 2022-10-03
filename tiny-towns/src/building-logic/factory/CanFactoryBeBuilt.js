export const CanFactoryBeBuilt = (squares) => {
    if (
        numberOfStoneSquares(squares) < 2 ||
        numberOfBrickSquares(squares) < 2 ||
        numberOfWoodSquares(squares) < 1 
    ) {
        return false;
    }

    let woodSquares = [];

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'wood') {
            woodSquares.push(i);
        }
    }

    return woodSquares.some(woodIndex => canFactoryBeBuiltPerSquare(woodIndex, squares));
}

const canFactoryBeBuiltPerSquare = (index, board) => {
    switch (index) {
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
            return false;
        case 6:
            return false;
        case 7:
            return wood7(board);
        case 8:
            return wood8(board);
        case 9:
            return false;   
        case 10:
            return false;  
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
    return (
        (board[1] === 'brick' && board[5] === 'stone' && board[9] === 'stone' && board[13] === 'brick')
        ||
        (board[4] === 'brick' && board[5] === 'stone' && board[6] === 'stone' && board[7] === 'brick')
    );
}

const wood1 = (board) => {
    return (
        (board[0] === 'brick' && board[4] === 'stone' && board[8] === 'stone' && board[12] === 'brick')
        ||
        (board[2] === 'brick' && board[6] === 'stone' && board[10] === 'stone' && board[14] === 'brick')
    );
}

const wood2 = (board) => {
    return (
        (board[3] === 'brick' && board[7] === 'stone' && board[11] === 'stone' && board[15] === 'brick')
        ||
        (board[1] === 'brick' && board[5] === 'stone' && board[9] === 'stone' && board[13] === 'brick')
    );
}

const wood3 = (board) => {
    return (
        (board[2] === 'brick' && board[6] === 'stone' && board[10] === 'stone' && board[14] === 'brick')
        ||
        (board[7] === 'brick' && board[6] === 'stone' && board[5] === 'stone' && board[4] === 'brick')
    );
}

const wood4 = (board) => {
    return (
        (board[0] === 'brick' && board[1] === 'stone' && board[2] === 'stone' && board[3] === 'brick')
        ||
        (board[8] === 'brick' && board[9] === 'stone' && board[10] === 'stone' && board[11] === 'brick')
    );
}

const wood7 = (board) => {
    return (
        (board[3] === 'brick' && board[2] === 'stone' && board[1] === 'stone' && board[0] === 'brick')
        ||
        (board[11] === 'brick' && board[10] === 'stone' && board[9] === 'stone' && board[8] === 'brick')
    );
}

const wood8 = (board) => {
    return (
        (board[4] === 'brick' && board[5] === 'stone' && board[6] === 'stone' && board[7] === 'brick')
        ||
        (board[12] === 'brick' && board[13] === 'stone' && board[14] === 'stone' && board[15] === 'brick')
    );
}

const wood11 = (board) => {
    return (
        (board[7] === 'brick' && board[6] === 'stone' && board[5] === 'stone' && board[4] === 'brick')
        ||
        (board[15] === 'brick' && board[14] === 'stone' && board[13] === 'stone' && board[12] === 'brick')
    );
}

const wood12 = (board) => {
    return (
        (board[8] === 'brick' && board[9] === 'stone' && board[10] === 'stone' && board[11] === 'brick')
        ||
        (board[13] === 'brick' && board[9] === 'stone' && board[5] === 'stone' && board[1] === 'brick')
    );
}

const wood13 = (board) => {
    return (
        (board[12] === 'brick' && board[8] === 'stone' && board[4] === 'stone' && board[0] === 'brick')
        ||
        (board[14] === 'brick' && board[10] === 'stone' && board[6] === 'stone' && board[2] === 'brick')
    );
}

const wood14 = (board) => {
    return (
        (board[13] === 'brick' && board[9] === 'stone' && board[5] === 'stone' && board[1] === 'brick')
        ||
        (board[15] === 'brick' && board[11] === 'stone' && board[7] === 'stone' && board[3] === 'brick')
    );
}

const wood15 = (board) => {
    return (
        (board[11] === 'brick' && board[10] === 'stone' && board[9] === 'stone' && board[8] === 'brick')
        ||
        (board[14] === 'brick' && board[10] === 'stone' && board[6] === 'stone' && board[2] === 'brick')
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

const numberOfBrickSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'brick') {
            count++;
        }
    }
    return count;
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
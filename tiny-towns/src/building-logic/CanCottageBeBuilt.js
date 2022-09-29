
export const CanCottageBeBuilt = (squares) => {

    if (!squares.includes('glass') || !squares.includes('wheat') || !squares.includes('brick')) {
        return false;
    }

    let glassSquares = [];

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'glass') {
            glassSquares.push(i);
        }
    }

    return glassSquares.some(squareIndex => canCottageBeBuiltPerSquare(squareIndex, squares))    
}

const canCottageBeBuiltPerSquare = (squareIndex, board) => {
    switch (squareIndex) {
        case 0:
            console.log('case 0');
            return glass0(board);
        case 1:
            console.log('case 1');
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
        (board[4] === 'wheat' && board[1] === 'brick')
        ||
        (board[4] === 'brick' && board[1] === 'wheat') 
    );
}

const glass1 = (board) => {
    console.log(board);
    return (
        (board[0] === 'wheat' && board[5] === 'brick')
        ||
        (board[0] === 'brick' && board[5] === 'wheat')
        ||
        (board[2] === 'wheat' && board[5] === 'brick')
        ||
        (board[2] === 'brick' && board[5] === 'wheat')  
    )
}

const glass2 = (board) => {
    return (
        (board[1] === 'wheat' && board[6] === 'brick')
        ||
        (board[1] === 'brick' && board[6] === 'wheat')
        ||
        (board[3] === 'wheat' && board[6] === 'brick')
        ||
        (board[3] === 'brick' && board[6] === 'wheat')  
    )
}

const glass3 = (board) => {
    return (
        (board[2] === 'wheat' && board[7] === 'brick')
        ||
        (board[2] === 'brick' && board[7] === 'wheat')
    )
}

const glass4 = (board) => {
    return (
        (board[0] === 'wheat' && board[5] === 'brick')
        ||
        (board[0] === 'brick' && board[5] === 'wheat')
        ||
        (board[8] === 'wheat' && board[5] === 'brick')
        ||
        (board[8] === 'brick' && board[5] === 'wheat')  
    )
}

const glass5 = (board) => {
    return (
        (board[1] === 'wheat' && board[4] === 'brick')
        ||
        (board[1] === 'brick' && board[4] === 'wheat')
        ||
        (board[1] === 'wheat' && board[6] === 'brick')
        ||
        (board[1] === 'brick' && board[6] === 'wheat')
        ||
        (board[4] === 'wheat' && board[9] === 'brick')
        ||
        (board[4] === 'brick' && board[9] === 'wheat')
        ||
        (board[6] === 'wheat' && board[9] === 'brick')
        ||
        (board[6] === 'brick' && board[9] === 'wheat')  
    )
}

const glass6 = (board) => {
    return (
        (board[2] === 'wheat' && board[5] === 'brick')
        ||
        (board[2] === 'brick' && board[5] === 'wheat')
        ||
        (board[2] === 'wheat' && board[7] === 'brick')
        ||
        (board[2] === 'brick' && board[7] === 'wheat')
        ||
        (board[5] === 'wheat' && board[10] === 'brick')
        ||
        (board[5] === 'brick' && board[10] === 'wheat')
        ||
        (board[7] === 'wheat' && board[10] === 'brick')
        ||
        (board[7] === 'brick' && board[10] === 'wheat')
    )
}

const glass7 = (board) => {
    return (
        (board[3] === 'wheat' && board[6] === 'brick')
        ||
        (board[3] === 'brick' && board[6] === 'wheat')
        ||
        (board[6] === 'wheat' && board[11] === 'brick')
        ||
        (board[6] === 'brick' && board[11] === 'wheat')
    )
}

const glass8 = (board) => {
    return (
        (board[4] === 'wheat' && board[9] === 'brick')
        ||
        (board[4] === 'brick' && board[9] === 'wheat')
        ||
        (board[12] === 'wheat' && board[9] === 'brick')
        ||
        (board[12] === 'brick' && board[9] === 'wheat')
    )
}

const glass9 = (board) => {
    return (
        (board[5] === 'wheat' && board[8] === 'brick')
        ||
        (board[5] === 'brick' && board[8] === 'wheat')
        ||
        (board[5] === 'wheat' && board[10] === 'brick')
        ||
        (board[5] === 'brick' && board[10] === 'wheat')
        ||
        (board[8] === 'wheat' && board[13] === 'brick')
        ||
        (board[8] === 'brick' && board[13] === 'wheat')
        ||
        (board[10] === 'wheat' && board[13] === 'brick')
        ||
        (board[10] === 'brick' && board[13] === 'wheat')
    )
}

const glass10 = (board) => {
    return (
        (board[6] === 'wheat' && board[9] === 'brick')
        ||
        (board[6] === 'brick' && board[9] === 'wheat')
        ||
        (board[9] === 'wheat' && board[14] === 'brick')
        ||
        (board[9] === 'brick' && board[14] === 'wheat')
        ||
        (board[6] === 'wheat' && board[11] === 'brick')
        ||
        (board[6] === 'brick' && board[11] === 'wheat')
        ||
        (board[11] === 'wheat' && board[14] === 'brick')
        ||
        (board[11] === 'brick' && board[14] === 'wheat')
    )
}

const glass11 = (board) => {
    return (
        (board[7] === 'wheat' && board[10] === 'brick')
        ||
        (board[7] === 'brick' && board[10] === 'wheat')
        ||
        (board[10] === 'wheat' && board[15] === 'brick')
        ||
        (board[10] === 'brick' && board[15] === 'wheat')
    )
}

const glass12 = (board) => {
    return (
        (board[8] === 'wheat' && board[13] === 'brick')
        ||
        (board[8] === 'brick' && board[13] === 'wheat')
    )
}

const glass13 = (board) => {
    return (
        (board[12] === 'wheat' && board[9] === 'brick')
        ||
        (board[12] === 'brick' && board[9] === 'wheat')
        ||
        (board[9] === 'wheat' && board[14] === 'brick')
        ||
        (board[9] === 'brick' && board[14] === 'wheat')
    )
}

const glass14 = (board) => {
    return (
        (board[13] === 'wheat' && board[10] === 'brick')
        ||
        (board[13] === 'brick' && board[10] === 'wheat')
        ||
        (board[10] === 'wheat' && board[15] === 'brick')
        ||
        (board[10] === 'brick' && board[15] === 'wheat')
    )
}

const glass15 = (board) => {
    return (
        (board[11] === 'wheat' && board[14] === 'brick')
        ||
        (board[11] === 'brick' && board[14] === 'wheat')
    )
}
export const CanFarmBeBuilt = (squares) => {
    if (
        numberOfWheatSquares < 2 || numberOfWoodSquares < 2
    ) {
        return false;
    }

    let woodSquares = [];

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'wood') {
            woodSquares.push(i);
        }
    }

    return woodSquares.some(woodIndex => canFarmBeBuiltPerSquare(woodIndex, squares));
}

const canFarmBeBuiltPerSquare = (squareIndex, board) => {
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
    if (board[1] === 'wood') {
        return (board[4] === 'wheat' && board[5] === 'wheat')
    }
    if (board[4] === 'wood') {  
        return (board[1] === 'wheat' && board[5] === 'wheat')
    }
    return false;
}

const wood1 = (board) => {
    if (board[0] === 'wood') {
        return (board[4] === 'wheat' && board[5] === 'wheat')
    }
    if (board[2] === 'wood') {  
        return (board[5] === 'wheat' && board[6] === 'wheat')
    }
    if (board[5] === 'wood') {
        return (
            (board[0] === 'wheat' && board[4] === 'wheat')
            ||
            (board[2] === 'wheat' && board[6] === 'wheat')
        );
    }
    return false;
}

const wood2 = (board) => {
    if (board[1] === 'wood') {
        return (board[5] === 'wheat' && board[6] === 'wheat')
    }
    if (board[3] === 'wood') {  
        return (board[6] === 'wheat' && board[7] === 'wheat')
    }
    if (board[6] === 'wood') {
        return (
            (board[1] === 'wheat' && board[5] === 'wheat')
            ||
            (board[3] === 'wheat' && board[7] === 'wheat')
        );
    }
    return false;
}

const wood3 = (board) => {
    if (board[2] === 'wood') {
        return (board[6] === 'wheat' && board[7] === 'wheat')
    }
    if (board[7] === 'wood') {  
        return (board[2] === 'wheat' && board[6] === 'wheat')
    }
    return false;
}

const wood4 = (board) => {
    if (board[0] === 'wood') {
        return (board[1] === 'wheat' && board[5] === 'wheat')
    }
    if (board[5] === 'wood') {  
        return (board[0] === 'wheat' && board[1] === 'wheat')
    }
    return false;
}

const wood5 = (board) => {
    if (board[1] === 'wood') {
        return (
            (board[0] === 'wheat' && board[4] === 'wheat')
            ||
            (board[2] === 'wheat' && board[6] === 'wheat')
        )
    }
    if (board[4] === 'wood') {  
        return (
            (board[0] === 'wheat' && board[1] === 'wheat')
            ||
            (board[8] === 'wheat' && board[9] === 'wheat')
        )
    }
    if (board[6] === 'wood') {
        return (
            (board[1] === 'wheat' && board[2] === 'wheat')
            ||
            (board[9] === 'wheat' && board[10] === 'wheat')
        );
    }
    if (board[9] === 'wood') {
        return (
            (board[4] === 'wheat' && board[8] === 'wheat')
            ||
            (board[6] === 'wheat' && board[10] === 'wheat')
        );
    }
    return false;
}

const wood6 = (board) => {
    if (board[2] === 'wood') {
        return (
            (board[1] === 'wheat' && board[5] === 'wheat')
            ||
            (board[3] === 'wheat' && board[7] === 'wheat')
        )
    }
    if (board[5] === 'wood') {  
        return (
            (board[1] === 'wheat' && board[2] === 'wheat')
            ||
            (board[9] === 'wheat' && board[10] === 'wheat')
        )
    }
    if (board[7] === 'wood') {
        return (
            (board[2] === 'wheat' && board[3] === 'wheat')
            ||
            (board[10] === 'wheat' && board[11] === 'wheat')
        );
    }
    if (board[10] === 'wood') {
        return (
            (board[5] === 'wheat' && board[9] === 'wheat')
            ||
            (board[7] === 'wheat' && board[11] === 'wheat')
        );
    }
    return false;
}

const wood7 = (board) => {
    if (board[3] === 'wood') {
        return (
            (board[2] === 'wheat' && board[6] === 'wheat')
        )
    }
    if (board[6] === 'wood') {  
        return (
            (board[2] === 'wheat' && board[3] === 'wheat')
            ||
            (board[10] === 'wheat' && board[11] === 'wheat')
        )
    }
    if (board[11] === 'wood') {
        return (
            (board[6] === 'wheat' && board[10] === 'wheat')
        );
    }
    return false;
}

const wood8 = (board) => {
    if (board[4] === 'wood') {
        return (
            (board[5] === 'wheat' && board[9] === 'wheat')
        )
    }
    if (board[9] === 'wood') {  
        return (
            (board[4] === 'wheat' && board[5] === 'wheat')
            ||
            (board[12] === 'wheat' && board[13] === 'wheat')
        )
    }
    if (board[12] === 'wood') {
        return (
            (board[9] === 'wheat' && board[13] === 'wheat')
        );
    }
    return false;
}

const wood9 = (board) => {
    if (board[5] === 'wood') {
        return (
            (board[4] === 'wheat' && board[8] === 'wheat')
            ||
            (board[6] === 'wheat' && board[10] === 'wheat')
        )
    }
    if (board[8] === 'wood') {  
        return (
            (board[4] === 'wheat' && board[5] === 'wheat')
            ||
            (board[12] === 'wheat' && board[13] === 'wheat')
        )
    }
    if (board[10] === 'wood') {
        return (
            (board[5] === 'wheat' && board[6] === 'wheat')
            ||
            (board[13] === 'wheat' && board[14] === 'wheat')
        );
    }
    if (board[13] === 'wood') {
        return (
            (board[8] === 'wheat' && board[12] === 'wheat')
            ||
            (board[10] === 'wheat' && board[14] === 'wheat')
        );
    }
    return false;
}

const wood10 = (board) => {
    if (board[6] === 'wood') {
        return (
            (board[5] === 'wheat' && board[9] === 'wheat')
            ||
            (board[7] === 'wheat' && board[11] === 'wheat')
        )
    }
    if (board[9] === 'wood') {  
        return (
            (board[5] === 'wheat' && board[6] === 'wheat')
            ||
            (board[13] === 'wheat' && board[14] === 'wheat')
        )
    }
    if (board[11] === 'wood') {
        return (
            (board[6] === 'wheat' && board[7] === 'wheat')
            ||
            (board[14] === 'wheat' && board[15] === 'wheat')
        );
    }
    if (board[14] === 'wood') {
        return (
            (board[9] === 'wheat' && board[13] === 'wheat')
            ||
            (board[11] === 'wheat' && board[15] === 'wheat')
        );
    }
    return false;
}

const wood11 = (board) => {
    if (board[7] === 'wood') {
        return (
            (board[6] === 'wheat' && board[10] === 'wheat')
        )
    }
    if (board[10] === 'wood') {  
        return (
            (board[6] === 'wheat' && board[7] === 'wheat')
            ||
            (board[14] === 'wheat' && board[15] === 'wheat')
        )
    }
    if (board[15] === 'wood') {
        return (
            (board[10] === 'wheat' && board[14] === 'wheat')
        );
    }
    return false;
}

const wood12 = (board) => {
    if (board[8] === 'wood') {
        return (
            (board[9] === 'wheat' && board[13] === 'wheat')
        )
    }
    if (board[13] === 'wood') {  
        return (
            (board[8] === 'wheat' && board[9] === 'wheat')
        )
    }
    return false;
}

const wood13 = (board) => {
    if (board[9] === 'wood') {
        return (
            (board[8] === 'wheat' && board[12] === 'wheat')
            ||
            (board[10] === 'wheat' && board[14] === 'wheat')
        )
    }
    if (board[12] === 'wood') {  
        return (
            (board[8] === 'wheat' && board[9] === 'wheat')
        )
    }
    if (board[14] === 'wood') {
        return (
            (board[9] === 'wheat' && board[10] === 'wheat')
        );
    }
    return false;
}

const wood14 = (board) => {
    if (board[10] === 'wood') {
        return (
            (board[9] === 'wheat' && board[13] === 'wheat')
            ||
            (board[11] === 'wheat' && board[15] === 'wheat')
        )
    }
    if (board[13] === 'wood') {  
        return (
            (board[9] === 'wheat' && board[10] === 'wheat')
        )
    }
    if (board[15] === 'wood') {
        return (
            (board[10] === 'wheat' && board[11] === 'wheat')
        );
    }
    return false;
}

const wood15 = (board) => {
    if (board[11] === 'wood') {
        return (
            (board[10] === 'wheat' && board[14] === 'wheat')
        )
    }
    if (board[14] === 'wood') {  
        return (
            (board[10] === 'wheat' && board[11] === 'wheat')
        )
    }
    return false;
}

const numberOfWheatSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].resource === 'wheat') {
            count++;
        }
    }
    return count;
}

const numberOfWoodSquares = (squares) => {
    let count = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].resource === 'wood') {
            count++;
        }
    }
    return count;
}
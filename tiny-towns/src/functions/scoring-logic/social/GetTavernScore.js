export const GetTavernScore = (board) => {
    const numberOfTaverns = getNumberOfTaverns(board);

    switch (numberOfTaverns) {
        case 0:
            return 0;
        case 1:
            return 2;
        case 2:
            return 5;
        case 3:
            return 9;
        case 4:
            return 14;
        case 5:
            return 20;
        default:
            return 20;
    }
}

const getNumberOfTaverns = (board) => {
    let count = 0;
    for (let i in board) {
        if (board[i] === 'tavern') {
            count++;
        }
    }
    return count;
}
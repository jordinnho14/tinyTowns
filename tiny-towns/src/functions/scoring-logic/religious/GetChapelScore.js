export const GetChapelScore = (board, cottageScore) => {

    if (cottageScore === 0) {
        return 0;
    }

    const numberOfChapels = getNumberOfChapels(board);
    const numberOfFedCottages = cottageScore / 3
    return numberOfChapels * numberOfFedCottages;
}

const getNumberOfChapels = (board) => {
    let count = 0;

    for (let i in board) {
        if (board[i] === 'chapel') {
            count++
        }
    }
    return count;
}
export const GetNumberOfFarms = (board) => {
    let farmCount = 0;

    for (let i in board) {
        if (board[i] === 'farm') {
            farmCount++;
        }
    }
    return farmCount;
}
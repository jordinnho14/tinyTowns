export const GetCottageScore = (board, numberOfFarms) => {
    const maxPossibleFedBuildings = numberOfFarms * 4;

    const numberOfCottages = getNumberOfCottages(board);

    if (numberOfCottages <= maxPossibleFedBuildings) {
        return numberOfCottages * 3;
    }

    else if (numberOfCottages > maxPossibleFedBuildings) {
        return maxPossibleFedBuildings * 3;
    }
}

const getNumberOfCottages = (board) => {
    let count = 0;

    for (let i in board) {
        if (board[i] === 'cottage') {
            count ++;
        }
    }
    return count;
}
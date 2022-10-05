import { BuildingList } from "../../building-logic/BuildingList";

export const GetEmptySquaresScore = (board) => {
    let score = 0;

    for (let i in board) {
        if (!BuildingList.includes(board[i])) {
            score--;
        }
    }
    return score;
}
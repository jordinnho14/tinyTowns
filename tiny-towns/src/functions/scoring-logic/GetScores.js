import { GetNumberOfFarms } from "./agricultural/GetNumberOfFarms";
import { GetTheaterScore } from "./entertainment/GetTheaterScore";
import { GetWellScore } from "./functional/GetWellScore";
import { GetCottageScore } from "./GetCottageScore";
import { GetEmptySquaresScore } from "./GetEmptySquaresScore";
import { GetChapelScore } from "./religious/GetChapelScore";
import { GetTavernScore } from "./social/GetTavernScore";

export const GetScores = (board) => {
    let cottageScore = 0;
    let industrialScore = 0;
    let religiousScore = 0;
    let socialScore = 0;
    let entertainmentScore = 0;
    let functionalScore = 0;
    let emptySquaresScore = 0;

    const numberOfFarms = GetNumberOfFarms(board);

    cottageScore = GetCottageScore(board, numberOfFarms);
    socialScore = GetTavernScore(board);
    functionalScore = GetWellScore(board);
    religiousScore = GetChapelScore(board, cottageScore);
    entertainmentScore = GetTheaterScore(board);
    emptySquaresScore = GetEmptySquaresScore(board);

    return ({
        cottages: cottageScore,
        industrial: industrialScore,
        religious: religiousScore,
        social: socialScore,
        entertainment: entertainmentScore,
        functional: functionalScore,
        emptySquares: emptySquaresScore
    })
}
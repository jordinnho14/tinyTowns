import React, { useEffect, useState } from 'react';
import { GetScores } from '../../functions/scoring-logic/GetScores';

export default function ScoreScreen (props) {
    const [buildingScores, setBuildingScores] = useState({
        cottages: 0,
        industrial: 0,
        religious: 0,
        social: 0,
        entertainment: 0,
        functional: 0,
        emptySquares: 0
    });
    const [totalScore, setTotalScore] = useState(0);


    const getTotalScoreFromBuildings = (buildingScores) => {
        return (
            buildingScores.cottages +
            buildingScores.industrial +
            buildingScores.religious +
            buildingScores.social +
            buildingScores.entertainment +
            buildingScores.functional +
            buildingScores.emptySquares
            );
    }

    useEffect(() => {
        setTotalScore(getTotalScoreFromBuildings(buildingScores));
    }, [buildingScores])

    useEffect(() => {
        setBuildingScores(GetScores(props.board));
    }, [props.board])

    return (
        <div>
            <h1>Your score is: {totalScore} </h1>
            <div>Score from cottages: {buildingScores.cottages}</div>
            <div>Score from industrial: {buildingScores.industrial}</div>
            <div>Score from religious: {buildingScores.religious}</div>
            <div>Score from social: {buildingScores.social}</div>
            <div>Score from entertainment: {buildingScores.entertainment}</div>
            <div>Score from functional: {buildingScores.functional}</div>
            <div>Score from empty squares: {buildingScores.emptySquares}</div>
            <button onClick={() => props.handleReturnToBoard()}>Return to board</button>
        </div>
        )
}
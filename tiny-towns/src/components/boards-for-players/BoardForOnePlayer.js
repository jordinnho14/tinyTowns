import React from 'react';
import Board from '../board/board';
import BuildingCards from '../building-cards/BuildingCards';
import ResourceSelector from '../resource-selection/ResourceSelector';

export default function BoardForOnePlayer(props) {
    return (
        <div>
            <button onClick={() => {props.setNumberOfPlayers(0)}}>Return to player select screeen</button>
            <div class="game-container">
                <div>
                    <Board selectedResource={props.selectedResource} handleFinishTown={props.onFinishTown} player={1} />
                    <ResourceSelector handleSelectedResourceChange={props.onResourceSelect} />
                </div>
                <div>
                    <BuildingCards />
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import Building from '../building/Building';
import './boardSquare.css';

function BoardSquare (props) {
    if (props.building && props.building !== '') {
        return (
            <div className="square" onClick={props.onClick}>
                <Building building={props.building}/> 
        </div>
        )
    } else if (props.selected) {

        return (
            <div className="selected-square" onClick={props.onClick}>
                <div className={props.resource}>
                    &nbsp;
                </div>
            </div>
        )
    } else {
        return (
            <div className="square" onClick={props.onClick}>
                <div className={props.resource}>
                    &nbsp; 
                </div>
            </div>
        )
    }
}

export default BoardSquare;
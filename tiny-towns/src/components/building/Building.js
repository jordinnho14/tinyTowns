import React from 'react';
import './Building.css';
import cottage from '../../resources/building-icons/cottage.png';

function Building (props) {

    return (
        <img src={getImage(props.building)} className='building-icon' />
    )

}

const getImage = (building) => {
    switch (building) {
        case 'cottage':
            return cottage;
        default:
            return cottage;
    }
}

export default Building;
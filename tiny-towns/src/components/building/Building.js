import React from 'react';
import './Building.css';
import cottage from '../../resources/building-icons/upscaledcottage.png';
import well from '../../resources/building-icons/well.png';
import farm from '../../resources/building-icons/upscaledFarm.png';

function Building (props) {   
    return (
        <img src={getImage(props.building)} className='building-icon' />
    )

}

const getImage = (building) => {
    switch (building) {
        case 'cottage':
            return cottage;
        case 'well':
            return well;
        case 'farm':
            return farm;
        default:
            return cottage;
    }
}

export default Building;
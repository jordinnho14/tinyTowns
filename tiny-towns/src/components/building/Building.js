import React from 'react';
import './Building.css';
import cottage from '../../resources/building-icons/upscaledcottage.png';
import well from '../../resources/building-icons/well.png';
import farm from '../../resources/building-icons/upscaledFarm.png';
import theater from '../../resources/building-icons/theater.png';
import factory from '../../resources/building-icons/factory.png';

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
        case 'theater':
            return theater;
        case 'factory':
            return factory;
        default:
            return cottage;
    }
}

export default Building;
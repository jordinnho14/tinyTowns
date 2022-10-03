import React from 'react';
import cottage from '../../resources/building-cards/cottage_card.png';
import farm from '../../resources/building-cards/farm_card.png';
import factory from '../../resources/building-cards/factory_card.png';
import chapel from '../../resources/building-cards/chapel_card.png';
import tavern from '../../resources/building-cards/tavern_card.png';
import theater from '../../resources/building-cards/theater_card.png';
import well from '../../resources/building-cards/well_card.png';




function BuildingCards (props) {
    return (
        <div>
            <div>Buildings:</div>
            <img src={cottage} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={farm} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={factory} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={chapel} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={tavern} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={theater} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={well} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
        </div>
    )
}

export default BuildingCards;
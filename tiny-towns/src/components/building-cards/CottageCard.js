import React from 'react';
import cottageCardImage from '../../resources/building-cards/cottage_card.png' ;

function CottageCard(props) {

    return (
        <div>
            <div>Buildings:</div>
            <img src={cottageCardImage} style={{height: "240px"}} alt="building card showing cottage"/>
        </div>
    )
}

export default CottageCard;
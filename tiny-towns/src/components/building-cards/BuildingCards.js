import React from 'react';
import Modal from '@mui/material/Modal';
import cottage from '../../resources/building-cards/cottage_card.png';
import farm from '../../resources/building-cards/farm_card.png';
import factory from '../../resources/building-cards/factory_card.png';
import chapel from '../../resources/building-cards/chapel_card.png';
import tavern from '../../resources/building-cards/tavern_card.png';
import theater from '../../resources/building-cards/theater_card.png';
import well from '../../resources/building-cards/well_card.png';
import './buildingCards.css';



function BuildingCards (props) {

    const [open, setOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(cottage);

    const handleBuildingCardClick = (building) => {
        setSelectedCard(building);
        setOpen(true);
    } 
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div>Buildings:</div>
            <Modal
                className='building-card-modal'
                open={open}
                onClose={handleClose}
            >
                <img src={selectedCard} className="building-card-image" style={{height: "350px"}} />
            </Modal>
            <img src={cottage} onClick={() => {handleBuildingCardClick(cottage)}} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={farm} onClick={() => {handleBuildingCardClick(farm)}} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={factory} onClick={() => {handleBuildingCardClick(factory)}}  style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={chapel} onClick={() => {handleBuildingCardClick(chapel)}} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={tavern} onClick={() => {handleBuildingCardClick(tavern)}} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={theater} onClick={() => {handleBuildingCardClick(theater)}} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
            <img src={well} onClick={() => {handleBuildingCardClick(well)}} style={{height: "180px", margin: '7px'}} alt="building card showing cottage"/>
        </div>
    )
}

export default BuildingCards;
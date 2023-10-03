import React, { useState } from 'react';
import './Carousel.css';
import { Grid, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomCard from '../CustomCard/CustomCard';
import NainaDevi from '../../../assets/naina.jpeg';
import Baglamukhi from '../../../assets/baglamukhi.jpeg';
import Jwala from '../../../assets/jwala.jpeg';


const cardData = [
    {
        id: 1,
        title: 'Card 1 Title',
        address: '123 Man St, City, Country',
        image: NainaDevi,
    },
    {
        id: 2,
        title: 'Card 2 Title',
        address: '456 Elm St, City, Country',
        image: Baglamukhi,
    },
    {
        id: 3,
        title: 'Card 3 Title',
        address: '789 Oak St, City, Country',
        image: Jwala,
    },
];

function Carousel() {
    const [visibleCards, setVisibleCards] = useState(3);
    const [startIndex, setStartIndex] = useState(0);

    const showMoreCards = () => {
        setVisibleCards(visibleCards + 3);
    };

    const showLessCards = () => {
        setVisibleCards(3);
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 3);
        }
    };

    const handleNext = () => {
        if (startIndex + visibleCards < cardData.length) {
            setStartIndex(startIndex + 3);
        }
    };

    const getCardGrid = () => {
        const cardGrid = [];
        for (let i = startIndex; i < startIndex + visibleCards; i += 3) {
            const row = (
                <Grid container spacing={2} key={`row-${i}`}>
                    {cardData.slice(i, i + 3).map((card) => (
                        <Grid item xs={4} key={card.id} className='card-element'>
                            <CustomCard
                                title={card.title}
                                address={card.address}
                                imageSrc={card.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            );
            cardGrid.push(row);
        }
        return cardGrid;
    };

    return (
        <div className="carousel-container">
            <div className="inner-carousel">
                <div className="carousel-controls">
                    <IconButton
                        className="carousel-button"
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                    >
                        <NavigateBeforeIcon />
                    </IconButton>
                </div>
                <div className="carousel-content">
                    {getCardGrid()}
                </div>
                <div className="carousel-controls">
                    <IconButton
                        className="carousel-button"
                        onClick={handleNext}
                        disabled={startIndex + visibleCards >= cardData.length}
                    >
                        <NavigateNextIcon />
                    </IconButton>
                </div>
            </div>
            {/* {visibleCards < cardData.length ? (
                <button className="see-more-button" onClick={showMoreCards}>
                    See More
                </button>
            ) : (
                <button className="see-more-button" onClick={showLessCards}>
                    See Less
                </button>
            )} */}
        </div>
    );
}

export default Carousel;

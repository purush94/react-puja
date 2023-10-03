import React, { useState } from 'react';
import './Body.css'; // Import the CSS file
import Image from '../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg';
import SearchBar from './subComponent/Searchbar/SearchBar';
import Carousel from './subComponent/Carousel/Carousel';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Meditation from './subComponent/Meditation/Meditation';
import AstroCard from './subComponent/AstroCard/AstroCard';
import DonationsCards from './subComponent/DonationsCards/DonationsCards';

const cardData = [
    {
        title: 'Why Choose Us',
        features: [
            {
                title: 'Feature 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'
            },
        ]
    },
    {
        title: 'Why Choose Us',
        features: [
            {
                title: 'Feature 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'
            },
        ]
    },
    {
        title: 'Why Choose Us',
        features: [
            {
                title: 'Feature 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'
            },
        ]
    },
];


function Body() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedSection, setSelectedSection] = useState('Upcoming');

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleSearch = (value) => {
        setSearchValue(value);
    };
    return (
        <Box className="body-container">
            <Box className="banner-container">
                <img
                    src={Image}
                    alt="Banner"
                    className="banner-image"
                />
            </Box>
            <Box className="body-content">
                {/* <SearchBar placeholder="Search..." onSearch={handleSearch} /> */}
                <Box className='body-carousel-section'>
                    <Box className='carousel-section-header'>
                        <Box className='disabled'
                        >
                            Ongoing
                        </Box>
                        <Box
                            onClick={() => handleSectionClick('Upcoming')}
                            className={selectedSection === 'Upcoming' ? 'selected' : ''}
                        >
                            Upcoming
                        </Box>
                    </Box>
                </Box>
                <Box className="body-carousel">
                    {selectedSection === 'Upcoming' && <Carousel />}
                    {selectedSection === 'Ongoing' && <h1>Upcoming Content</h1>}
                </Box>
                {/* <Box className='body-description-section'>
                    <Box>
                        <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                            Why Choose Us
                        </Typography>
                    </Box>
                    <Box className="description-card-section">
                        {cardData.map((card, index) => (
                            <Box className='description-card' key={index}>
                                <Paper elevation={0}>
                                    {card.features.map((feature, featureIndex) => (
                                        <div key={featureIndex}>
                                            <Typography variant="h6" gutterBottom>
                                                {feature.title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {feature.description}
                                            </Typography>
                                        </div>
                                    ))}
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Box> */}
                {/* <Box className='body-medication-section'>
                    <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                        Guided Mediatations
                    </Typography>
                    <Meditation />
                </Box> */}
                <Box className='body-astrology-section'>
                    <AstroCard />
                </Box>
                <Box className='body-donations-section'>
                    <DonationsCards />
                </Box>
            </Box>
        </Box>
    );
}

export default Body;

import { useState } from 'react';
import './Body.css'; // Import the CSS file
import Image from '../assets/home_banner.png';
// import SearchBar from './subComponent/Searchbar/SearchBar';
import Carousel from './subComponent/Carousel/Carousel';
// import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import Meditation from './subComponent/Meditation/Meditation';
import AstroCard from './subComponent/AstroCard/AstroCard';
import DonationsCards from './subComponent/DonationsCards/DonationsCards';
import '../App.css'
import { Card, CardContent, Paper } from '@mui/material';
import Pre from '../assets/preHeader.svg'
import Post from '../assets/postHeader.svg'

const cardData = [
    {
        title: 'Why Choose Us',
        features: [
            {
                title: 'Feature 1',
                description: 'Puja Ayojan will help you out to perform the Puja while sitting at home. If you are not physically present to offer puja to the temple because of any reason, we will perform the Puja on the behalf of you.'
            },
        ]
    },
    {
        title: 'Why Choose Us',
        features: [
            {
                title: 'Feature 2',
                description: 'Puja Ayojan takes care of the entire process, from booking to delivery of  Prasad to your home. Now all you need to do it to sit back and relax while we work and ensure that your Puja experience is Hassle-Free and performed to your satisfaction.'
            },
        ]
    },
    {
        title: 'Why Choose Us',
        features: [
            {
                title: 'Feature 3',
                description: 'Puja Ayojan addresses the need to make Indian spiritual services accessible worldwide at the click of a button. Puja ayojan allows you to participate in poojas from anywhere, eliminating geographical limitations.'
            },
        ]
    },
];


function Body() {
    const [selectedSection, setSelectedSection] = useState('Upcoming');

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    // const handleSearch = (value) => {
    //     setSearchValue(value);
    // };
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
                    <Box className='carousel-section-header font-playfair-regular section-header'>
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
                <Box className='body-description-section'>
                    <Box className='body-description-header'>
                        <img src={Pre} alt="Image" className='header-image' />
                        <span className='font-playfair-regular section-header'>Why Choose Us</span>
                        <img src={Post} alt="Image" className='header-image' />
                    </Box>
                    <Box className="description-card-section">
                        {cardData.map((card, index) => (
                            <Box className='description-card' key={index}>
                                <Paper elevation={0} sx={{ background: 'transparent' }}>
                                    {card.features.map((feature, featureIndex) => (
                                        <div key={featureIndex}>
                                            <span className='font-nunito-300 section-choose description-card'>{feature.description}</span>
                                        </div>
                                    ))}
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Box>
                {/* <Box className='body-medication-section'>
                    <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                        Guided Mediatations
                    </Typography>
                    <span className='font-playfair-regular section-header'>Guided Mediatations</span>
                    <Meditation />
                </Box> */}
                <Box className='body-astrology-section'>
                    <AstroCard />
                </Box>
                {/* <Box className='body-donations-section'>
                    <DonationsCards />
                </Box> */}
            </Box>
        </Box>
    );
}

export default Body;

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system'; import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@mui/material';
import './PujaPage.css'
import Jwaladevi from '../assets/jwala.jpeg'
import AboutPuja from './subComponent/AboutPuja/AboutPuja';
import Benefits from './subComponent/Benefits/Benefits';
import PricingComponent from './subComponent/PricingComponent/PricingComponent';
import { useNavigate, useParams } from 'react-router-dom';


function PujaPage() {
    const [selectedSection, setSelectedSection] = useState('About');
    const { firstword } = useParams();
    const navigate = useNavigate();
    console.log(firstword)

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleAddressClick = () => {
        navigate(`/puja-booking`);
    };

    return (
        <Box className="puja-container" sx={{ mt: 2 }}>
            <Card style={{ height: '300px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" sx={{ pl: 2 }}>
                            Shakti Peeth Jwala devi Puja and Yagya
                            {/* {props.details.name} */}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <IconButton aria-label="play/pause">
                                <LocationOnOutlinedIcon sx={{ height: 25, width: 25 }} />
                            </IconButton>
                            Jwala devi,Himachal
                            {/* {props.details.location} */}
                        </Typography>
                        <Typography component="div" variant="subtitle2" sx={{ pl: 2 }}>
                            Date: 01, October 2023
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 4, pb: 2, mt: 1 }}>
                        <Button variant="contained" sx={{ backgroundColor: '#FEB66D' }} onClick={handleAddressClick}>Book Now</Button>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 300, objectFit: 'cover' }}
                    image={Jwaladevi}
                    alt="Live from space album cover"
                />
            </Card>
            <Card style={{ height: '1000px' }}>
                <CardContent>
                    <Box className='puja-body-section'>
                        <Box className='puja-body-header'>
                            <Box
                                onClick={() => handleSectionClick('About')}
                                className={selectedSection === 'About' ? 'selected' : ''}
                            >
                                About
                            </Box>
                            <Box
                                onClick={() => handleSectionClick('Benefits')}
                                className={selectedSection === 'Benefits' ? 'selected' : ''}
                            >
                                Benefits
                            </Box>
                            <Box
                                className='disabled'
                            >
                                Recorded Video
                            </Box>
                        </Box>
                    </Box>
                    {selectedSection === 'About' && (
                        <div>
                            <AboutPuja />
                        </div>
                    )}
                    {selectedSection === 'Benefits' && (
                        <div>
                            <Benefits />
                        </div>
                    )}
                    {selectedSection === 'Recorded Video' && (
                        <div>
                            {/* Content for Recorded Video section */}
                        </div>
                    )}
                </CardContent>
                <PricingComponent />
            </Card>
        </Box>
    );
}

export default PujaPage;

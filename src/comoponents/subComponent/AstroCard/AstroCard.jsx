import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './AstroCard.css';
import AstroImg from '../../../assets/mystical-numerology-scene.jpg'

function AstroCard() {

    return (
        <Card className="astro-card" style={{ height: '300px', marginBottom: '30px' }}>
            <img src={AstroImg} alt="Background" className="background-image" />
            <CardContent className="overlay-content">
                <Typography variant="h6" className="overlay-heading" style={{ fontWeight: 'bold' }}>
                    Astrology Consultancy
                </Typography>
                <Typography variant="subtitle2" className="overlay-paragraph">
                    Chambray Carles Terry Gibson balls plaid wolf. Disrupt fashion axe 90's quinoa +1 Neutra. Irony ethnic ennui McSweeney's, semiotics small batch squid direct trade. Readymade salvia Echo Park scenester.
                </Typography>
                <Button variant="contained" color="primary" className="orange-button">
                    Book Now
                </Button>
            </CardContent>
        </Card>
    );
}

export default AstroCard;

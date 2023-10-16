import { Card, CardContent, Button } from '@mui/material';
import './AstroCard.css';
import '../../../App.css'
import AstroImg from '../../../assets/mystical-numerology-scene.png'

function AstroCard() {

    return (
        <Card className="astro-card" >
            <img src={AstroImg} alt="Background" className="background-image" />
            <CardContent className="overlay-content">
                <span className='font-montserrat-regular section-header'>Astrology Consultancy</span>
                <span className='font-nunito-300 puja-content'>Unlock Your Future with Astrology Readings!
                    Gain Insight and Guidance for Life's Journey.
                    Experienced Astrologer Offering Personalized Consultations.
                    Discover the Stars' Secrets  - Book Your Session Today!</span>
                <Button variant="contained" color="primary" className="orange-button" disabled style={{ color: 'white' }}>
                    Coming Soon
                </Button>
            </CardContent>
        </Card>
    );
}

export default AstroCard;

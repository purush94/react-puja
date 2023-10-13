
import { Box, Input, Button, Paper, Grid } from '@mui/material';
import './Footer.css';
import '../App.css'
import Logo from '../assets/PALogo.svg'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()

    const handlePrivacy = () => {
        navigate(`/privacy-policy`);
    }

    const handleCancel = () => {
        navigate(`/cancellation`);
    }

    const handleAddressClick = () => {
        navigate(`/`);
    }
    return (
        <Box className="footer">
            <Box className="top-section">
                <span className='font-montserrat-medium section-header'>Keep up-to Date with Puja Ayojan</span>
                <Box className="email-section">
                    <Input
                        type="email"
                        placeholder="Enter your Email Id"
                        className="my-input"
                        disableUnderline
                    />
                    <Button variant="contained" className="subscribe-button font-nunito-300 section-content">
                        Subscribe Now
                    </Button>
                </Box>
            </Box>
            <Box className="bottom-section">
                <Grid item >
                    <Paper elevation={0} className="column" sx={{ backgroundColor: 'transparent' }}>
                        <p className='font-roboto-bold  section-header'>Office Hours</p>
                        <span className='font-nunito-300 subSection-content'>Mon - Fri: 9:00 AM - 5:00 PM</span>
                        <p onClick={handlePrivacy} style={{ cursor: 'pointer' }} className='font-nunito-300'>Privacy Policy</p>
                        <p onClick={handleCancel} style={{ cursor: 'pointer' }} className='font-nunito-300'>Cancellation</p>
                    </Paper>
                </Grid>
                <Grid item >
                    <Box onClick={handleAddressClick} sx={{ cursor: 'pointer' }}>
                        <img src={Logo} style={{ width: '40%', height: '30%', marginRight: '5px', cursor: 'pointer' }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Paper elevation={0} className="column" sx={{ background: 'transparent' }}>
                        <p className='font-roboto-bold section-header'>Contact Us</p>
                        <p className='font-nunito-300 subSection-content'>Phone: +91 (123) 456-7890</p>
                        <span className='font-nunito-300 subSection-content'>Email: info@pujaayojan.com</span>
                    </Paper>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;

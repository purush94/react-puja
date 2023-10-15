
import { Box, Input, Button, Paper, Grid } from '@mui/material';
import './Footer.css';
import '../App.css'
import Logo from '../assets/puja_logo.png'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()

    const handlePrivacy = () => {
        navigate(`/privacy-policy`);
    }

    const handleCancel = () => {
        navigate(`/cancellation`);
    }

    const handleContact = () => {
        navigate(`/contact-us`)
    }

    const handleTermsAndCondition = () => {
        navigate(`/terms-condition`)
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
                        <p onClick={handleCancel} style={{ cursor: 'pointer' }} className='font-nunito-300'>Cancellation and Refund</p>
                        <p onClick={handleTermsAndCondition} style={{ cursor: 'pointer' }} className='font-nunito-300'>Terms and Condition</p>
                        <p onClick={handleContact} style={{ cursor: 'pointer' }} className='font-nunito-300'>Contact Us</p>
                    </Paper>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box onClick={handleAddressClick} sx={{ cursor: 'pointer', width: '30%' }}>
                        <img src={Logo} style={{ width: '80%', height: '20%', cursor: 'pointer' }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Paper elevation={0} className="column" sx={{ background: 'transparent' }}>
                        <p className='font-roboto-bold section-header'>Contact Us</p>
                        <p className='font-nunito-300 subSection-content'>Phone: +91 74041 11033</p>
                        <span className='font-nunito-300 subSection-content'>Email: namaste@pujayojan.com</span>
                    </Paper>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;

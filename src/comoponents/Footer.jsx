
import { Box, Input, Button, Paper, Grid } from '@mui/material';
import './Footer.css';
import '../App.css'
import Logo from '../assets/logo.svg'
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

    const handleShipping = () => {
        navigate(`/shipping-policy`)
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
                <span className='font-montserrat-medium section-header'>Want a personalised puja?</span>
                <Button variant="contained" onClick={handleContact} className="subscribe-button font-nunito-300 section-content" style={{
                    backgroundColor: 'white', color: 'rgb(255, 131, 65)'
                }}>
                    Contact Us
                </Button>
                {/* <Box className="email-section">
                    <Input
                        type="email"
                        placeholder="Enter your Email Id"
                        className="my-input"
                        disableUnderline
                    />
                </Box> */}
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
                        <p onClick={handleShipping} style={{ cursor: 'pointer' }} className='font-nunito-300'>Shipping Policy</p>
                    </Paper>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '100px' }}>
                            <img src={Logo} style={{ cursor: 'pointer' }} onClick={handleAddressClick} />
                        </div>
                        <p style={{ cursor: 'context-menu' }} className='font-nunito-300 puja-content'>&copy; 2023 PujaAyojan.<br /> All Rights Reserved.</p>
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

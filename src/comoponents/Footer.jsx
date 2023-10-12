
import { Box, Input, Button, Paper, Grid } from '@mui/material';
import './Footer.css';
import '../App.css'

function Footer() {
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
                    <Button variant="contained" className="subscribe-button font-roboto-bold section-content">
                        Subscribe Now
                    </Button>
                </Box>
            </Box>
            <Box className="bottom-section">
                <Grid item >
                    <Paper elevation={0} className="column" sx={{ backgroundColor: 'transparent' }}>
                        <p className='font-roboto-bold  section-header'>Office Hours</p>
                        <span className='font-roboto-bold subSection-content'>Mon - Fri: 9:00 AM - 5:00 PM</span>
                    </Paper>
                </Grid>
                <Grid item >
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                            src=""
                            alt="Logo"
                            className="logo"
                        />
                    </Box>
                </Grid>
                <Grid item>
                    <Paper elevation={0} className="column" sx={{ background: 'transparent' }}>
                        <p className='font-roboto-bold section-header'>Contact Us</p>
                        <p className='font-roboto-bold subSection-content'>Phone: +91 (123) 456-7890</p>
                        <span className='font-roboto-bold subSection-content'>Email: info@pujaayojan.com</span>
                    </Paper>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;

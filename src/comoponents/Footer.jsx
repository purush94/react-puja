
import { Box, Typography, Input, Button, Paper, Grid } from '@mui/material';
import './Footer.css';
import '../App.css'

function Footer() {
    return (
        <Box className="footer">
            <Box className="top-section">
                <Typography variant="h4" className="heading font-montserrat-medium">
                    Keep up-to Date with Puja Ayojan
                </Typography>
                <Box className="email-section">
                    <Input
                        type="email"
                        placeholder="Enter your Email Id"
                        className="my-input"
                        disableUnderline
                    />
                    <Button variant="contained" className="subscribe-button">
                        Subscribe Now
                    </Button>
                </Box>
            </Box>
            <Box className="bottom-section">
                <Grid item >
                    <Paper elevation={0} className="column">
                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Office Hours</Typography>
                        <Typography>Mon - Fri: 9:00 AM - 5:00 PM</Typography>
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
                    <Paper elevation={0} className="column">
                        <Typography variant="h6" style={{ fontWeight: 'bold' }} >Contact Us</Typography>
                        <Typography>Phone: +91 (123) 456-7890</Typography>
                        <Typography>Email: info@shivshakti.com</Typography>
                    </Paper>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;

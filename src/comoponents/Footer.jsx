import React from 'react';
import { Box, Typography, Input, Button, Paper, Grid, TextField } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <Box className="footer">
            <Box className="top-section">
                <Typography variant="h4" className="heading">
                    Keep up-to Date with Shiv Shakti
                </Typography>
                <Box className="email-section">
                    <Input
                        type="email"
                        placeholder="Enter your email ID"
                        className="my-input"
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
                            src="logo.png"
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

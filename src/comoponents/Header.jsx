import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import '../App.css'
import { IconButton } from '@mui/material';
import Logo from '../assets/logo.svg'
import YouTubeIcon from '@mui/icons-material/YouTube';

function ResponsiveAppBar() {
    const [checked, setChecked] = React.useState(true);
    const navigate = useNavigate();
    const url = `https://www.youtube.com/channel/UC43scwABOdykkNP21HWUosg`

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleAddressClick = () => {
        navigate(`/`);
    }

    const handleAboutUs = () => {
        navigate(`/about-us`);
    }

    return (
        <Box position="static" color='inherit'>
            <Container maxWidth="xl" sx={{ display: 'flex' }}>
                <Toolbar sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ width: '100px' }}>
                        <img src={Logo} style={{ cursor: 'pointer' }} onClick={handleAddressClick} />
                    </div>
                    <Box className="header-options" style={{ display: 'flex', flex: 0.3, justifyContent: 'space-around', alignItems: 'center' }}>
                        <Button variant="text" color="inherit" className='font-montserrat-medium' style={{ cursor: 'pointer' }} onClick={handleAddressClick}>Home</Button>
                        <Button variant="text" color="inherit" className='font-montserrat-medium' style={{ cursor: 'pointer' }} onClick={handleAboutUs}>About Us</Button>
                        <YouTubeIcon sx={{ cursor: 'pointer' }} onClick={() => window.open(url, '_blank')} color='error' />
                        {/* <Box className='font-montserrat-medium'>
                            <span className='font-montserrat-medium'>हिन्दी</span>
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                                color="warning"
                            />
                            <span className='font-montserrat-medium'>English</span>
                        </Box> */}
                        {/* <Button variant="contained" className='font-montserrat-medium' sx={{
                            backgroundColor: '#FEB66D', "&:hover": {
                                backgroundColor: "#FEB66D",
                                color: "white"
                            }
                        }} disabled>

                        </Button> */}
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default ResponsiveAppBar;

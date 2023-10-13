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
import Logo from '../assets/PALogo.svg'

function ResponsiveAppBar() {
    const [checked, setChecked] = React.useState(true);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleAddressClick = () => {
        navigate(`/`);
    }

    return (
        <Box position="static" color='inherit'>
            <Container maxWidth="xl" sx={{ display: 'flex' }}>
                <Toolbar sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Box onClick={handleAddressClick} sx={{ cursor: 'pointer' }}>
                        <img src={Logo} style={{ width: '30%', height: '20%', marginRight: '5px', cursor: 'pointer' }} onClick={handleAddressClick} />
                    </Box>
                    <Box className="header-options" style={{ display: 'flex', flex: 0.6, justifyContent: 'space-around' }}>
                        <Button variant="text" color="inherit" className='font-montserrat-medium' style={{ cursor: 'context-menu' }} disabled></Button>
                        <Button variant="text" color="inherit" className='font-montserrat-medium' style={{ cursor: 'context-menu' }} disabled></Button>
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

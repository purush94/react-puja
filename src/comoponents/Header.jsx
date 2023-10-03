import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import './Header.css'

function ResponsiveAppBar() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Box position="static" color='inherit'>
            <Container maxWidth="xl" sx={{ display: 'flex' }}>
                <Toolbar>
                    <Box>
                        <AdbIcon sx={{ mr: 1 }} />
                    </Box>
                    <Box className="header-options" style={{ display: 'flex' }}>
                        <Button variant="text" color="inherit">Temple Onborading</Button>
                        <Button variant="text" color="inherit">About Us</Button>
                        <Box>
                            <span>हिन्दी</span>
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                                color="warning"
                            />
                            <span>English</span>
                        </Box>
                        <Button variant="contained">Donate</Button>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default ResponsiveAppBar;

import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Benefits() {
    return (
        <Box sx={{ ml: 2 }}>
            <Typography variant='h6' sx={{ color: '#FAA030', fontWeight: 700 }}>Benefits of Puja</Typography>
            <Box>
                <div style={{ display: 'flex', marginTop: '1%' }}>
                    <IconButton>
                        <KeyboardDoubleArrowRightIcon color='warning' />
                    </IconButton>
                    <div>
                        <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>Wealth and Prosperity</Typography>
                        <Typography variant='subtitle2'>lorem ipsum</Typography>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Benefits
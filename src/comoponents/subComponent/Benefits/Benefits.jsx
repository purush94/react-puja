import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Benefits({ benefitData }) {
    return (
        <Box sx={{ ml: 2 }}>
            <p className='font-roboto-bold subSection-header' style={{ color: '#FE6603' }}>Benefits of Puja</p>
            <Box>
                {benefitData.map((benefit, index) => (
                    <div key={index} style={{ display: 'flex', marginTop: '1%', alignItems: 'center' }}>
                        <IconButton >
                            <KeyboardDoubleArrowRightIcon color='warning' sx={{ cursor: 'context-menu' }} />
                        </IconButton>
                        <div>
                            <span className='font-roboto-regular subSection-content' style={{ lineHeight: '1.2rem' }}>{benefit}</span>
                        </div>
                    </div>
                ))}
            </Box>
        </Box>
    );
}


export default Benefits
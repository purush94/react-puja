import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import Icon from '../../../assets/li_icon.svg'

function Benefits({ benefitData }) {
    return (
        <Box sx={{ ml: 2 }}>
            <p className='font-roboto-bold subSection-header' style={{ color: '#FE6603' }}>Benefits of Puja</p>
            <Box>
                {benefitData.map((benefit, index) => (
                    <div key={index} style={{ display: 'flex', marginTop: '1%', alignItems: 'center' }}>
                        <IconButton >
                            <img src={Icon} style={{ width: '60%', cursor: 'context-menu', marginRight: '5px' }} />
                        </IconButton>
                        <div>
                            <span className='font-nunito-300 puja-content' style={{ lineHeight: '1.2rem' }}>{benefit}</span>
                        </div>
                    </div>
                ))}
            </Box>
        </Box>
    );
}


export default Benefits
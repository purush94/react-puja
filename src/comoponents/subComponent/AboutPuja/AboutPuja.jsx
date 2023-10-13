
import { Box } from '@mui/system'
import '../../../App.css'

function AboutPuja({ aboutData, aboutHeader }) {
    return (
        <Box sx={{ ml: 2 }}>
            <Box>
                <p className='font-roboto-bold subSection-header' style={{ color: '#FE6603' }}>{aboutHeader}</p>
                <p className='font-nunito-300 puja-content' style={{ lineHeight: '1.5rem', fontWeight: '700px' }}>{aboutData}</p>
            </Box>
        </Box>
    )
}

export default AboutPuja
import { Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import '../../../App.css'
import { useEffect } from 'react';


function Contact() {
    const cardStyle = {
        margin: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box className='container-background' sx={{ minHeight: '500px' }}>
            <Card sx={cardStyle}>
                <CardContent>
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Contact Us</p>
                    <br />
                    <p className='subSection-header font-nunito-300'>Please feel free to reach out to us with any questions or inquiries.</p>
                    <p className='font-nunito-300 subSection-content'><strong>Address:</strong> Omaxe Green, Ambala Chandigarh Expressway, Haryana-134003</p>
                    <p className='font-nunito-300 subSection-content'><strong>Phone:</strong> +91 74041 11033</p>
                    <p className='font-nunito-300 subSection-content'><strong>Email:</strong> <a href="mailto:namaste@pujayojan.com">namaste@pujayojan.com</a></p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Contact
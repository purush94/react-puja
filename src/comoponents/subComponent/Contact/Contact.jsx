import { Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import '../../../App.css'
import { useEffect } from 'react';
import PersonalisedPuja from '../../forms/PersonalisedPuja';


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
                <Box display="flex">
                    <CardContent sx={{ width: '50%' }}>
                        <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline', margin: '0px' }}>Contact Us</p>
                        <br />
                        <p className='subSection-header font-nunito-300'>Please feel free to reach out to us with any questions or inquiries.</p>
                        <p className='font-nunito-300 subSection-content'><strong>Address:</strong> Omaxe Green, Ambala Chandigarh Expressway, Haryana-134003</p>
                        <p className='font-nunito-300 subSection-content'><strong>Phone:</strong> +91 74041 11033</p>
                        <p className='font-nunito-300 subSection-content'><strong>Email:</strong> <a href="mailto:namaste@pujayojan.com">namaste@pujayojan.com</a></p>
                        <p className='font-nunito-300 section-choose'>
                            Personalized Puja rituals for specific Doshas or life events are believed to harness the divine energy and provide spiritual remedies or blessings to individuals, helping them navigate challenges and enhance their well-being. These ceremonies are often guided by experienced priests or spiritual leaders who understand the nuances of the rituals and the astrological factors at play. We are providing guidance and support in matters of spirituality and personal well-being is a valuable service, and it can have a meaningful impact on people's lives. If you have any specific information or assistance you'd like to provide or if you have any questions related to offering these services, please feel free to contact us
                        </p>
                    </CardContent>
                    <CardContent sx={{ width: '50%' }}>
                        <PersonalisedPuja />
                    </CardContent>
                </Box>

            </Card>
        </Box>
    )
}

export default Contact
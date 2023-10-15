import { Card, CardContent } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react";

function About() {
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
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>About Us</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Puja Ayojan is a platform from India dedicated solely to helping crores of Indians in their spiritual and devotional journey. Along with this, it also provides accurate guidance to the devotees to supply their feelings and devotion. With Puja Ayojan you can perform the Puja with just a few clicks and worship your favorite deities directly from your phone or Laptop.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Puja Ayojan will help you out to perform the Puja while sitting at home. If you are not physically present to offer puja to the temple because of any reason, we will perform the Puja on the behalf of you.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Puja Ayojan takes care of the entire process, from booking to delivery of Prasad to your home. Now all you need to do it to sit back and relax while we work and ensure that your Puja experience is Hassle-Free and performed to your satisfaction.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Puja Ayojan addresses the need to make Indian spiritual services accessible worldwide at the click of a button.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}><span className='privacy-span'>1. Convenience:</span> We Perform Pujas for you without the need for travel or scheduling conflicts.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}><span className='privacy-span'>2. Variety:</span> We offer a wide range of Puja services and rituals to choose from, catering to diverse preferences.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}><span className='privacy-span'>3. Expert Guidance:</span> Our platform provide access to experienced priests and spiritual guides for personalized ceremonies.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}><span className='privacy-span'>4. Record-keeping:</span> Puja ayojan often maintain records of your pujas, making it easier to track your spiritual journey will also share recorded video of your puja.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}><span className='privacy-span'>5. Cost-effective:</span> Pujas can be more affordable than traditional in-person ceremonies.</p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default About
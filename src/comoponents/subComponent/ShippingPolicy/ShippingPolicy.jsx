import { Card, CardContent } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react";

function ShippingPolicy() {
    const cardStyle = {
        margin: '0 20px 20px 20px',
        padding: '0 20px 20px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box className='container-background' sx={{ minHeight: '500px' }}>
            <Card sx={cardStyle}>
                <CardContent>
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Shipping Policy</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Puja Ayojan’s goal is to deliver Prasad to you with maximum speed and efficiency.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}><span className='privacy-span'>Prasad</span>-We will send you Punch Meva as Prasad, excluding any perishable items that could compromise your well-being and overall Prasad experience.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Prasad is usually prepared and processed within 1-3 business days, starting from the Pooja commencement date. During busier times, it may take a bit longer to package and ship.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>If the packaging and processing time is expected to extend beyond 3 business days, we will inform you through email or WhatsApp.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>The shipping duration is dependent on your location and the chosen shipping method during checkout. Currently, we exclusively deliver Prasad to addresses within India. As of now, we do not offer Prasad shipping to international addresses, meaning destinations outside of India.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>The Puja Ayojan team is solely responsible for the shipment of Prasad. The charges for Pooja bookings cover all associated costs, including Prasad and shipping expenses for recipients at Indian addresses. This integration of costs is a significant factor in determining the overall price for each Pooja.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>If you encounter any problems with the delivery of your Prasad, please reach out to us promptly. We are committed to assisting you and will collaborate with the shipping carrier to address and resolve any issues, ensuring your order reaches you as swiftly as possible.</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>If you require any assistance or have any inquiries, please do not hesitate to contact us. We are here to help and are eager to assist you with any concerns or needs you may have.</p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ShippingPolicy
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

function TermsAndCondition() {
    const cardStyle = {
        margin: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box className='container-background' sx={{ minHeight: '1200px' }}>
            <Card sx={cardStyle}>
                <CardContent>
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Term & Conditions: </p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Welcome to www.pujaayojan. These Terms and Conditions (“Terms”) govern your use of our website and the services we provide. By accessing or using our website, you agree to be bound by these Terms. Please read them carefully before proceeding.</p>
                    <br />
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>About Services: </p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>We are, engaged in the business of digitizing temples and other religious experiences for our users, providing astrological services and other related services.</p>
                    <br />
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Rules of Conduct: </p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>When using our website, you agree to comply with all applicable laws and regulations. You shall not engage in any conduct that may be considered unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable. Puja ayojan reserves the right to terminate or suspend your access to the website if you violate these rules of conduct.</p>
                    <br />
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>User Restrictions:</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>To use our website, you must be at least 18 years old or accessing the website under the supervision of a legal guardian who agrees to be bound by these Terms. You agree to use the website only for lawful purposes and in accordance with all applicable laws and regulations. You are solely responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                    <br />
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Intellectual Property:</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>All content, trademarks, logos, and intellectual property displayed on the website are the property of Puja ayojan or their respective owners. You may not copy, distribute, reproduce, or use any content from our website without prior written permission.</p>
                    <br />
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Information and Pricing:</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>To cancel a service, please contact our customer support team via namaste@pujaayojan.com</p>

                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Cancellations made at least [24 hours] before the scheduled service will be eligible for a full refund. Cancellations made after this time frame may not be eligible for a refund.</p>

                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Refunds for scheduled devotional services will be issued if the service is cancelled in accordance with our cancellation policy.</p>

                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>Refunds will be credit back to the original credit card/ bank account/other medium used for payment within 15 days from the days of cancellation request was received.</p>

                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>SEVERABILITY:</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>If any provision of these Terms of Use is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms of Use will otherwise remain in full force and effect and enforceable. The failure of either party to exercise, in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder. Waiver of compliance in any particular instance does not mean that we will waive compliance in the future. In order for any waiver of compliance with these Terms of Use to be binding, we must provide you with written notice of such waiver through one of our authorized representatives.</p>
                    <br />
                    <p className="section-header font-montserrat-bold" style={{ textDecoration: 'underline' }}>Contact Information:</p>
                    <p className="font-nunito-300 subSection-content" style={{ lineHeight: '2rem' }}>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                    <p className='font-nunito-300 subSection-content'><strong>Phone:</strong> +91 74041 110333</p>
                    <p className='font-nunito-300 subSection-content'><strong>Email:</strong> <a href="mailto:namaste@pujayojan.com">namaste@pujayojan.com</a></p>
                </CardContent>
            </Card>
        </Box>
    )
}

export default TermsAndCondition
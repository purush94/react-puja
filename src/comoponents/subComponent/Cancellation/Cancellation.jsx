import { Box } from "@mui/system"
import '../../../App.css'
import { Card, CardContent } from "@mui/material"
import { useEffect } from "react";

const cancellationRefundPolicy = [
    "You may request a cancellation of a scheduled devotional service at least 24 hours before the scheduled date and time.",
    "To cancel a service, please contact our customer support team via namaste@pujaayojan.com.",
    "Cancellations made at least 24 hours before the scheduled service will be eligible for a full refund.",
    "Cancellations made after this time frame may not be eligible for a refund.",
    "The date selected for the puja(s) or offering(s) cannot be changed after making the payment.",
    "However, if the temple decides to cancel a Puja or an event scheduled by you, an alternative date will be provided.",
    "The processing fees or transaction costs, if any, should be borne by the cardholder and may be charged extra with the pujas and offerings rate.",
    "If you want to transfer the Puja service to benefit some other person, contact us at namaste@pujaayojan.com at least 24 hours prior to the Puja.",
    "Refunds for scheduled devotional services will be issued if the service is canceled in accordance with our cancellation policy.",
    "Refunds will be credited back to the original payment method within 15 days from the day the cancellation request was received.",
    "A Puja booking can be rescheduled once at no extra cost if you contact customer care."
];

const prasadInformation = [
    "Prasad is free of cost; we are not charging for the Prasad.",
    "Prasad that is delivered from the Temple to your home address could be a perishable food item, which has been offered to the deity during Puja.",
    "Prasad couldn't be returned to Puja ayojan or Temple once it has been ordered by the Devotee."
];

function Cancellation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Box className='container-background' sx={{ minHeight: '1200px' }}>
            <Card sx={{ margin: '20px', padding: '20px' }}>
                <CardContent>
                    <p className="section-header" style={{ textDecoration: 'underline' }}>Cancellation & Refund Policy</p>
                    <p className="font-nunito-300" style={{ lineHeight: '2rem' }}>Thank you for choosing www.pujaayojan.com. We appreciate your interest and trust in our devotional services. This Cancellation & Refund Policy is designed to provide guidance on cancellations, returns, and refunds for our services.</p>
                    <br />
                    <p className="subSection-header">Cancellations for Scheduled Devotional Services:</p>
                    <ul>
                        {cancellationRefundPolicy.map((point, index) => (
                            <li key={index} className="font-nunito-300" style={{ lineHeight: '2rem' }}>{point}</li>
                        ))}
                    </ul>
                    <br />
                    <p className="subSection-header">Prasad</p>
                    <ul>
                        {prasadInformation.map((point, index) => (
                            <li key={index} className="font-nunito-300" style={{ lineHeight: '2rem' }}>{point}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Cancellation
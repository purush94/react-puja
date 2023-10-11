// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, dateOfBooking, bookingDetails } = req.body;

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Booking Confirmation',
            text: `Hi ${name},\n\nYour booking for ${dateOfBooking} has been confirmed.\n\nBooking Details: ${bookingDetails}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

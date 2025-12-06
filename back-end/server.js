const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://shahid-portfolio-rho.vercel.app"
    ],
    methods: ['POST'],
}));

app.use(express.json());

// Contact Route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // CHECK if env is missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).send("Email credentials missing");
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${name}`,
        text: `${message}\n\nReply to: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Nodemailer Error:", error);
        res.status(500).send("Error sending email");
    }
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const router = express.Router();

// Mock database
const users = [
    { email: 'user@example.com', resetPasswordToken: '', resetPasswordExpires: '' }
];

router.post('/send-reset-link', (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(404).send('User not found');
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        to: user.email,
        from: 'passwordreset@yourdomain.com',
        subject: 'Password Reset',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset/${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Reset link sent');
    });
});

export default router;

import express from 'express';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import Users from '../models/userModel.js'; // Import the Users model

const router = express.Router();

router.post('/send-reset-link', async (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email); // Log the received email

    try {
        const user = await Users.findOne({ email });
        console.log('User found:', user); // Log the found user

        if (!user) {
            console.log('Email not found'); // Log if email is not found
            return res.status(404).send('User not found');
        }

        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

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
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await Users.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });

        if (!user) {
            return res.status(400).send('Password reset token is invalid or has expired.');
        }

        user.password = await bcrypt.hash(newPassword, 12); // Hash the new password
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).send('Password has been reset.');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

export default router;

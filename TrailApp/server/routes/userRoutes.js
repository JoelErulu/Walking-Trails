// Import dependencies
import express from 'express'

// Import controllers for API calls
import {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    updateUserRole,
    signin,
    logout
} from '../controllers/userController.js'

const router = express.Router()

// GET all users || ADMIN OLY
router.get('/users', getAllUsers)
// GET a single user
router.get('/:id', getUser)
// POST a new user
router.post('/signup', createUser)
// DELETE a user
router.delete('/:id', deleteUser)
// UPDATE a user profile
router.patch('/updateProfile/:id', updateUser)
// UPDATE a user role
router.patch('/updateRole/:id', updateUserRole)
// HANDLE SIGN IN & LOGOUT
router.post('/signin', signin);
router.post('/logout', logout);
// TODO: Google OAuth
// router.post('/googleLogin', googleSignIn);


//handle password update
/*router.post('/forgotPassword', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email: new RegExp(`^${email.trim()}$`, 'i') });

        if (!user) {
            return res.status(404).json({ message: "Email not found" });
        }

        // Logic to send the reset email...
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }

});



// Import dependencies
//const crypto = require('crypto');
//const nodemailer = require('nodemailer');
//const User = require('../models/User');  // Assuming a User model for managing users
//const router = express.Router();

// Password reset request handler
router.post('/send-reset-link', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({ email: new RegExp(`^${email.trim()}$`, 'i') });
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        // Generate a token
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
        await user.save();
        
        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // or other service (Outlook, Yahoo, etc.)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        
        // Email content
        const mailOptions = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: 'Password Reset Request',
            text: `You are receiving this because you (or someone else) requested a password reset for your account.
            Please click on the following link, or paste it into your browser to complete the process:
            http://yourfrontendurl.com/reset/${resetToken}
            If you did not request this, please ignore this email.`,
        };
        
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Password reset link sent' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending reset link' });
    }
});




router.post('/reset/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }, // Check if token is not expired
        });

        if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

        // Set new password and clear the reset token
        user.password = newPassword;  // Ensure password hashing here
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Password has been reset successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error resetting password' });
    }
});
*/

export default router;

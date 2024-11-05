app.post('/api/user/reset-password', async (req, res) => {
    console.log("Request received for password reset:", req.body.email);
    
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ message: "Email not found" });
    }

    // If found, proceed with sending reset email and log success
    console.log("User found:", user.email);
    // ... proceed with sending reset email
    res.status(200).json({ message: "Reset link sent" });
});
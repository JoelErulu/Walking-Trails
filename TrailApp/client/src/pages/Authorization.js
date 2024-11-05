import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/Form/SignInForm.js';
import SignUpForm from '../components/Form/SignUpForm.js';
import ForgotPasswordForm from '../components/Form/ForgotPasswordForm.js';
import { signin, signup } from '../actions/auth.js';
import { sendResetLink } from '../api/index.js';  // Import the reset link API function
import '../interfaceSettings.css';

const initialState = { 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    roleType: 'User', 
    gender: '', 
    age: '', 
    ethnicity: '', 
    community: '' 
};

const Authorization = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [resetEmail, setResetEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (showForgotPassword) {
            try {
                console.log("Attempting to send reset link for email:", resetEmail);
                const response = await sendResetLink(resetEmail);
                if (response.status === 200) {
                    setSuccessMessage("Password reset link has been sent to your email.");
                    setShowForgotPassword(false); // Return to Sign In view
                } else {
                    console.error("Unexpected response:", response);
                }
            } catch (error) {
                console.error("Error sending reset link:", error);
                alert(error.response?.data?.message || "Email not found. Please try again.");
            }
        } else {
            if (isSignup) {
                dispatch(signup(formData, navigate));
                setSuccessMessage('Account created successfully!');
            } else {
                dispatch(signin(formData, navigate));
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
        setShowForgotPassword(false);
        setSuccessMessage('');
    };

    const showForgotPasswordForm = () => {
        setShowForgotPassword(true);
        setIsSignup(false);
        setShowPassword(false);
        setSuccessMessage('');
    };

    return (
        <div id="sign-in-container" className="container mt-5">
            <div id="sign-in-card" className="card">
                <div id="sign-in-card-body" className="card-body">
                    <h5 id="sign-in-title" className="card-title text-center">
                        {showForgotPassword ? 'Reset Password' : (isSignup ? 'Sign Up' : 'Sign In')}
                    </h5>

                    {successMessage && (
                        <div className="alert alert-success text-center">
                            {successMessage}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div id="sign-in-form-group" className="form-group">
                            {showForgotPassword ? (
                                <ForgotPasswordForm resetEmail={resetEmail} setResetEmail={setResetEmail} />
                            ) : isSignup ? (
                                <SignUpForm formData={formData} handleChange={handleChange} showPassword={showPassword} />
                            ) : (
                                <SignInForm formData={formData} handleChange={handleChange} handleShowPassword={handleShowPassword} showPassword={showPassword} />
                            )}
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <button 
                                id="sign-in-submit-btn" 
                                type="submit" 
                                className="btn btn-primary btn-block btn-spacing">
                                {showForgotPassword ? 'Send Reset Link' : (isSignup ? 'Sign Up' : 'Sign In')}
                            </button>
                        </div>
                        
                        {!showForgotPassword && (
                            <div className="text-center mt-3">
                                <button 
                                    id="switch-mode-btn" 
                                    type="button" 
                                    onClick={switchMode} 
                                    className="btn btn-link">
                                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </button>
                                <div className="text-center mt-2">
                                    <button 
                                        id="forgot-mode-btn"
                                        type="button" 
                                        className="btn btn-link" 
                                        onClick={showForgotPasswordForm}>
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>
                        )}

                        {showForgotPassword && (
                            <div className="text-center mt-3">
                                <button 
                                    id="back-to-signin-btn"
                                    type="button" 
                                    className="btn btn-link" 
                                    onClick={() => setShowForgotPassword(false)}>
                                    Back to Sign In
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
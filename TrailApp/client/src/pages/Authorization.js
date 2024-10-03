// Import React components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Authorization/input.js';
import { signin, signup } from '../actions/auth.js';
import '../interfaceSettings.css';
import { Row, Col } from 'react-bootstrap';

// Initial state with updated fields
const initialState = { 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '', 
    gender: '', 
    age: '', 
    ethnicity: '', 
    ggcCommunity: '' 
};

const Authorization = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [resetEmail, setResetEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (showForgotPassword) {
            // Handle forgot password submit
            alert(`Password reset link has been sent to ${resetEmail}`);
            setShowForgotPassword(false); // Go back to Sign In after submission
        } else {
            isSignup ? dispatch(signup(formData, navigate)) : dispatch(signin(formData, navigate));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
        setShowForgotPassword(false); // Ensure forgot password form is hidden when switching modes
    };

    const showForgotPasswordForm = () => {
        setShowForgotPassword(true);
        setIsSignup(false); // Ensure it exits sign-up mode
        setShowPassword(false); // Hide password visibility toggle
    };

    return (
        <div id="sign-in-container" className="container mt-5">
            <div id="sign-in-card" className="card">
                <div id="sign-in-card-body" className="card-body">
                    <h5 id="sign-in-title" className="card-title text-center">
                        {showForgotPassword ? 'Reset Password' : (isSignup ? 'Sign Up' : 'Sign In')}
                    </h5>
                    
                    <form onSubmit={handleSubmit}>
                        <div id="sign-in-form-group" className="form-group">
                            {!showForgotPassword && isSignup && (
                                <>
                                    <Input 
                                        id="username-input" 
                                        name="username" 
                                        label="Username" 
                                        handleChange={handleChange} 
                                        autoFocus 
                                        type="text" 
                                    />
                                    <div className="form-group">
                                        <label htmlFor="gender-input"><strong>Gender</strong></label>
                                        <select 
                                            id="gender-input" 
                                            name="gender" 
                                            value={formData.gender} 
                                            onChange={handleChange} 
                                            className="form-control">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <Input 
                                        id="age-input" 
                                        name="age" 
                                        label="Age" 
                                        handleChange={handleChange} 
                                        type="number" 
                                    />
                                    <div className="form-group">
                                        <label htmlFor="ethnicity-input"><strong>Ethnicity</strong></label>
                                        <select 
                                            id="ethnicity-input" 
                                            name="ethnicity" 
                                            value={formData.ethnicity} 
                                            onChange={handleChange} 
                                            className="form-control">
                                            <option value="">Select Ethnicity</option>
                                            <option value="hispanic">Hispanic</option>
                                            <option value="white">White</option>
                                            <option value="black">Black American or African</option>
                                            <option value="asian">Asian</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ggc-community-input"><strong>Part of GGC Community</strong></label>
                                        <select 
                                            id="ggc-community-input" 
                                            name="ggcCommunity" 
                                            value={formData.ggcCommunity} 
                                            onChange={handleChange} 
                                            className="form-control">
                                            <option value="">Select Yes or No</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {/* Sign In / Sign Up form */}
                            {!showForgotPassword && (
                                <>
                                    <Input 
                                        id="email-input" 
                                        name="email" 
                                        label="Email Address" 
                                        handleChange={handleChange} 
                                        type="email" 
                                    />
                                    <Input
                                        id="password-input"
                                        name="password"
                                        label={isSignup ? "New Password" : "Password"}
                                        handleChange={handleChange}
                                        type={showPassword ? "text" : "password"}
                                        handleShowPassword={handleShowPassword}
                                    />
                                    {isSignup && 
                                        <Input 
                                            id="confirm-password-input" 
                                            name="confirmPassword" 
                                            label="Repeat Password" 
                                            handleChange={handleChange} 
                                            type={showPassword ? "text" : "password"}
                                        />
                                    }
                                </>
                            )}

                            {/* Forgot Password form */}
                            {showForgotPassword && (
                                <div className="form-group">
                                    <label htmlFor="reset-email"><strong>Enter your email to reset password</strong></label>
                                    <input 
                                        id="reset-email" 
                                        type="email" 
                                        className="form-control" 
                                        value={resetEmail} 
                                        onChange={(e) => setResetEmail(e.target.value)} 
                                        required 
                                    />
                                </div>
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

                        {/* Option to go back to Sign In from Forgot Password form */}
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
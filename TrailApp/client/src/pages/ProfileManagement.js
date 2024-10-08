// Import React components
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Authorization/input.js';
import { updateProfile } from '../actions/auth.js';
import { getUser } from '../actions/users.js';
import '../interfaceSettings.css';

// Initial state with updated fields
// TODO: Make it so that form is prefilled with user profile data, connect to getUser() in actions/users.js
// TODO: Create a delete account button, that brings up a prompt asking the user to input their username or password for confirmation
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

const ProfileManagement = () => {
    const [showPassword, setShowPassword] = useState(false);
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
            dispatch(updateProfile(formData, navigate))
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const showForgotPasswordForm = () => {
        setShowForgotPassword(true);
        setShowPassword(false); // Hide password visibility toggle
    };

    return (
        <div id="sign-in-container" className="container mt-5">
            <div id="sign-in-card" className="card">
                <div id="sign-in-card-body" className="card-body">
                    <h5 id="sign-in-title" className="card-title text-center">
                        {showForgotPassword ? 'Reset Password' : 'Profile Manager'}
                    </h5>
                    
                    <form onSubmit={handleSubmit}>
                        <div id="sign-in-form-group" className="form-group">
                            {!showForgotPassword && (
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
                                        <label htmlFor="community-input"><strong>Part of GGC Community</strong></label>
                                        <select 
                                            id="community-input" 
                                            name="community" 
                                            value={formData.dommunity} 
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
                                    {/* TODO: Connect these individual inputs to the correct API calls! */}
                                    {/* TODO: GET password from DB */}
                                    <Input
                                        id="password-input"
                                        name="password"
                                        label="Current Password"
                                        handleChange={handleChange}
                                        type={showPassword ? "text" : "password"}
                                        handleShowPassword={handleShowPassword}
                                    />
                                    <Input
                                        id="password-input"
                                        name="password"
                                        label="New Password"
                                        handleChange={handleChange}
                                        type={showPassword ? "text" : "password"}
                                        handleShowPassword={handleShowPassword}
                                    /> 
                                    <Input 
                                        id="confirm-password-input" 
                                        name="confirmPassword" 
                                        label="Repeat Password" 
                                        handleChange={handleChange} 
                                        type={showPassword ? "text" : "password"}
                                    />
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
                                {showForgotPassword ? 'Send Reset Link' : 'Submit'}
                            </button>
                        </div>
                        
                        {!showForgotPassword && (
                            <div className="text-center mt-3">
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

export default ProfileManagement;
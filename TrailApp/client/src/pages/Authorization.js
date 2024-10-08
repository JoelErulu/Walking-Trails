// src/components/Authorization/Authorization.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/Form/SignInForm.js'; // Correct relative path
import SignUpForm from '../components/Form/SignUpForm.js';
import ForgotPasswordForm from '../components/Form/ForgotPasswordForm.js'; 
import { signin, signup } from '../actions/auth.js';
import '../interfaceSettings.css';

// Initial state with updated fields
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

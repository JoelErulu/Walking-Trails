// Import React components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Authorization/input.js';
import { signin, signup } from '../actions/auth.js';
import '../interfaceSettings.css';
import { Row, Col } from 'react-bootstrap';

//TODO: Fill out rest of form details
const initialState = { username: '', email: '', password: '', confirmPassword: '' };

const Authorization = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        isSignup ? dispatch(signup(formData, navigate)) : dispatch(signin(formData, navigate));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const switchMode = () => {
        setIsSignup((prev) => !prev);
        setShowPassword(false);
    };

    return (
        <div id="sign-in-container" className="container mt-5">
            <div id="sign-in-card" className="card">
                <div id="sign-in-card-body" className="card-body">
                    <h5 id="sign-in-title" className="card-title text-center">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </h5>
                    <form onSubmit={handleSubmit}>
                        <div id="sign-in-form-group" className="form-group">
                            {isSignup && (
                                <Input 
                                    id="username-input" 
                                    name="username" 
                                    label="Username" 
                                    handleChange={handleChange} 
                                    autoFocus 
                                    type="text" 
                                />
                            )}
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
                                label="New Password"
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
                                    handleShowPassword={handleShowPassword}
                                />
                            }
                            {isSignup && 
                            <Row className="mb-2"> {/* Adjust margin-bottom here */}
                            {/* TODO: CHANGE THE INPUT TYPES */}
                                <Input 
                                    id="gender-input" 
                                    name="gender" 
                                    label="Gender" 
                                    handleChange={handleChange} 
                                    type="text"
                                />
                                <Input 
                                    id="ethnicity-input" 
                                    name="ethnicity" 
                                    label="Ethnicity" 
                                    handleChange={handleChange} 
                                    type="text"
                                />
                                <Input 
                                    id="age-input" 
                                    name="age" 
                                    label="Age" 
                                    handleChange={handleChange} 
                                    type="text"
                                />
                                <Input 
                                    id="community-input" 
                                    name="community" 
                                    label="Community" 
                                    handleChange={handleChange} 
                                    type="text"
                                />
                            </Row>
                            }
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <button 
                                id="sign-in-submit-btn" 
                                type="submit" 
                                className="btn btn-primary btn-block btn-spacing">
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <button 
                                id="switch-mode-btn" 
                                type="button" 
                                onClick={switchMode} 
                                className="btn btn-link">
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </button>
                            <div className="text-center mt-2">
                                {/* TODO: Figure out how to set up password recovery through email identity verification. */}
                                <button 
                                    id="forgot-mode-btn"
                                    type="button" 
                                    className="btn btn-link" >
                                    Forgot Password?
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
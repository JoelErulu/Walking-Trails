import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import Input from '../components/Authorization/input.js';
import { signin, signup } from '../actions/auth.js';
import '../interfaceSettings.css';
import { Row, Col } from 'react-bootstrap';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Authorization = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        return () => googleLogout();
    }, []);

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
                                <Row className="mb-2"> {/* Adjust margin-bottom here */}
                                    <Col xs={12} sm={6} className="pr-0"> {/* Reduce padding-right */}
                                        <Input 
                                            id="first-name-input" 
                                            name="firstName" 
                                            label="First Name" 
                                            handleChange={handleChange} 
                                            autoFocus 
                                            type="text" />
                                    </Col>
                                    <Col xs={12} sm={6} className="pl-0"> {/* Reduce padding-left */}
                                        <Input 
                                            id="last-name-input" 
                                            name="lastName" 
                                            label="Last Name" 
                                            handleChange={handleChange} 
                                            type="text" />
                                    </Col>
                                </Row>
                            )}
                            <Input 
                                id="email-input" 
                                name="email" 
                                label="Email Address" 
                                handleChange={handleChange} 
                                type="email" />
                            <Input
                                id="password-input"
                                name="password"
                                label="Password"
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
                                    type="password" />}
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
                                <button 
                                    id="forgot-mode-btn"
                                    type="button" 
                                    className="btn btn-link" 
                                    data-toggle="modal" 
                                    data-target="#forgotPasswordModal">
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
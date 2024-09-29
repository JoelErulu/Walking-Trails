// Import React components
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Import components
// import { getUsers, updateUserRole } from '../../../actions/users';
import Input from '../components/Authorization/input.js';
import { updateProfile } from '../actions/auth.js';

// Import global stylesheet
import '../interfaceSettings.css';
import { Row, Col } from 'react-bootstrap';

// TODO: fill out rest of form details
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

// README: I suggest implementing a call to a 'RoleIdentifier.js' that determines whether an extra form appears regarding setting user roleType by searching through email
const ProfileManagement = () => {

    const [showPassword, setShowPassword] = useState(true);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(formData, navigate))
    };

    // TODO: Clean handleChange function or repurpose
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h2>User Profile Manager</h2>
            {/* GET current user details, and allow for user to fill out/update form as and UPDATE database */}
            {/* GET user detail by email search, then UPDATE roleType */}
            <form onSubmit={handleSubmit}>
                <div>
                    <Row> {/* Adjust margin-bottom here */}
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
                        handleShowPassword={handleShowPassword} />
                    <Input 
                        id="confirm-password-input" 
                        name="confirmPassword" 
                        label="Repeat Password" 
                        handleChange={handleChange} 
                        handleShowPassword={handleShowPassword}
                        type={showPassword ? "text" : "password"} />
                    {/* TODO: COMPLETE REST OF USER FORM */}
                    <Input 
                        id="ethnicity" 
                        name="ethn" 
                        label="Ethnicity CHANGE TO SELECT BOX" 
                        handleChange={handleChange} 
                        type="text" />
                </div>
                <div>
                    <div>
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
    )
}

export default ProfileManagement;
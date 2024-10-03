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
                    <Input 
                        id="username-input" 
                        name="username" 
                        label="Username" 
                        handleChange={handleChange} 
                        autoFocus 
                        type="text" 
                    />
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
                        type={showPassword ? "text" : "password"}
                        handleShowPassword={handleShowPassword} />
                    {/* TODO: COMPLETE REST OF USER FORM */}
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
                </div>
                <div>
                    <div>
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
    )
}

export default ProfileManagement;
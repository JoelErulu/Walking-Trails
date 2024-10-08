// src/components/Authorization/SignUpForm.js
import React from 'react';
import Input from '../Authorization/input.js';

const SignUpForm = ({ formData, handleChange, showPassword }) => {
    return (
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
                    value={formData.community} 
                    onChange={handleChange} 
                    className="form-control">
                    <option value="">Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <Input 
                id="confirm-password-input" 
                name="confirmPassword" 
                label="Repeat Password" 
                handleChange={handleChange} 
                type={showPassword ? "text" : "password"}
            />
        </>
    );
};

export default SignUpForm;

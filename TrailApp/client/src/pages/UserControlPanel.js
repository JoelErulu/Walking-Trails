import React, { useState, useEffect } from 'react';

import UserInfoForm from '../components/Form/UserInfoForm.js';
import UpdateProfileForm from '../components/Form/UpdateProfile.js';
import { getUser, deleteUser } from '../actions/users.js';
import { updateProfile } from '../actions/auth.js';

// TODO:
//      Add and test functionality of buttons for "Delete Profile" & "Submit" 
//      When deleting profile, open form that prompts user to type in their username and current password & confirm deletion. 
//      Create modular forms for password reset purposes: one for sending email with link to user, another for choosing new password.
//      FORM 1: enter email
//      FORM 2 (Create New Page): enter email, new password, confirm password
//      Create modular form for profile deletion confirmation.
//      FORM 3:  enter username, password, radio button for "Yes I understand my data cannot be recovered."
//      TEST ALL BUTTONS & FORMS
//      Fix routing to fetch current user information.
const UserControlPanel = () => {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        gender: '',
        age: '',
        ethnicity: '',
        community: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // TODO: Implement handleSubmit and handleDelete as needed
    const handleSubmit = async () => {
        try {
            // Call your update user API
            await updateProfile(formData);
            // Handle success (e.g., show a success message)
        } catch (error) {
            // Handle error (e.g., show an error message)
        }
    };
    
    const handleDelete = async () => {
        // Show a confirmation dialog before deleting
        const confirmed = window.confirm("Are you sure you want to delete your profile?");
        if (confirmed) {
            await deleteUser(formData);
            // Handle success/error as needed
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUser();
            setFormData(userData); // Assuming getUser returns the user data object.
        };
        fetchUserData();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Profile Management</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">User Information</h5>
                            <UserInfoForm />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Update Profile</h5>
                            <UpdateProfileForm 
                                formData={formData}
                                handleChange={handleChange}
                                showPassword={showPassword}
                                handleDelete={handleDelete}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserControlPanel;

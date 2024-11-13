import React, { useState, useEffect } from 'react';
import UserInfoForm from '../components/Form/UserInfoForm.js';
import UpdateProfileForm from '../components/Form/UpdateProfile.js';
import { getUser, deleteUser } from '../actions/users.js';
import { updateProfile } from '../actions/auth.js';
import SendResetLink from '../components/Form/SendResetLink.js'; // Import the new component

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

    const handleSubmit = async () => {
        try {
            await updateProfile(formData);
        } catch (error) {
            // Handle error
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete your profile?");
        if (confirmed) {
            await deleteUser(formData);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUser();
            setFormData(userData);
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
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Send Reset Link</h5>
                            <SendResetLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserControlPanel;

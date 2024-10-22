import React from 'react';
import UserInfoForm from '../components/Form/UserInfoForm.js';

import UpdateProfileForm from '../components/Form/UpdateProfile.js'; // Ensure you import the UpdateProfileForm
import { getUser, updateUserRole } from '../actions/users';


const ProfileManagement = () => {
    
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
                                formData={{ /* Pass the necessary form data here */ }} 
                                handleChange={() => { /* Add your handleChange function here */ }} 
                                showPassword={false} // or a state variable to control password visibility
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileManagement;

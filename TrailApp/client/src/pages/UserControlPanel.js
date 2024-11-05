import React from 'react';
import UserInfoForm from '../components/Form/UserInfoForm.js';

import UpdateProfileForm from '../components/Form/UpdateProfile.js'; // Ensure you import the UpdateProfileForm
import { getUser, updateUserRole } from '../actions/users';

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

export default UserControlPanel;

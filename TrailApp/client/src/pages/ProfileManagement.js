// Import React components
import React from 'react';

// Import components
// import { getUsers, updateUserRole } from '../../../actions/users';


// Import global stylesheet
import '../interfaceSettings.css';

{/* README: I suggest implementing a call to a 'RoleIdentifier.js' that determines whether an extra form appears regarding setting user roleType by searching through email */}
const ProfileManagement = () => {

    return (
        <div>
            <h2>User Profile Manager</h2>
            <p>Update your user profile information here!</p>
            {/* GET current user details, and allow for user to fill out/update form as and UPDATE database */}
            {/* GET user detail by email search, then UPDATE roleType */}
        </div>
    )
}

export default ProfileManagement;
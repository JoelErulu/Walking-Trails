// Import React components
import React from 'react';

// Import components
import '../interfaceSettings.css';
//import { getUsers, updateUserRole } from '../../../actions/users';

// Import global stylesheet
import '../interfaceSettings.css';

// README: 
const AdminManager = () => {

    return (
        <div>
            <h2>Admin Management Portal</h2>
            <p>Here you will be able to change a registered user's role! Just fill out the form below.</p>
            {/* Insert input form that takes in user email & searches for them in database to update their roleType */}
            {/* Reuse code from oldDirectory/admin/AdminPrivilege*/}
            <p>Here you will be able to upload, delete, and update videos! Just fill out the form below.</p>
            {/* Insert input form that takes in video URL &/or file and updates the database */}
        </div>
    )
}

export default AdminManager;
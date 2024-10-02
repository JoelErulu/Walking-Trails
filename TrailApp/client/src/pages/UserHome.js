// Import React components
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

// Import global stylesheet
import '../interfaceSettings.css';

const UserHome = () => {
    return (
        <div>
            <h2>Welcome to Walking Trails & Fitness!</h2>
            <p>Are you visiting a trail or would you like to watch videos?</p>
            <p>
                {/* Link to Profile Management page */}
                <Link to="/profileManagement" className="btn btn-primary">Manage Profile</Link>
            </p>
            {/* TODO: Insert cards, one that opens accordion menu to trails pages and another that leads to video categories */}
            {/* We can reuse trail display code from src/pages/Trails.js */}
        </div>
    );
};

export default UserHome;
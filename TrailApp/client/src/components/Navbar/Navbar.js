import React, { useEffect, useState } from 'react';

// Import the different navbars
import LandingNavbar from './LandingNavbar';
import UserNavbar from './UserNavbar';
import AdminNavbar from './AdminNavbar';

const Navbar = () => {
    const [navbar, setNavbar] = useState(null);

    // Function to check if the user is signed in
    const checkUserStatus = () => {
        const userProfile = JSON.parse(localStorage.getItem('profile'));

        if (userProfile) {
            const userRole = userProfile.result.role;
            if (userRole === 'Admin') {
                setNavbar(<AdminNavbar />);
            } else if (userRole === 'User') {
                setNavbar(<UserNavbar />);
            }
        } else {
            setNavbar(<LandingNavbar />); // Default navbar if not signed in
        }
    };

    useEffect(() => {
        checkUserStatus(); // Check user status when the component mounts
    }, []);

    return (
        <>
            {navbar}
        </>
    );
};

export default Navbar;
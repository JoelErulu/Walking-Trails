import React, { useEffect, useState } from 'react';

// Import the different navbars
import LandingNavbar from './LandingNavbar';
import UserNavbar from './UserNavbar';
import AdminNavbar from './AdminNavbar';

const Navbar = () => {
    const [navbar, setNavbar] = useState(null);

    // Function to check the user is of Admin/User roleType before generating their Navbars
    //TODO: Revise this JSON check once schemas redone
    const checkUserStatus = () => {
        const userProfile = JSON.parse(localStorage.getItem('profile'));

        // 
        if (userProfile) {
            const userRole = userProfile.result.role;
            if (userRole === 'Admin') {
                setNavbar(<AdminNavbar />);
            } else if (userRole === 'User') {
                setNavbar(<UserNavbar />);
            }
        } else {
            setNavbar(<LandingNavbar />);
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
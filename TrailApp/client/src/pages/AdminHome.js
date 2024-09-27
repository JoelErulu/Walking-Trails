import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import { getTrails } from '../actions/trails';

// Import styling
import '../interfaceSettings.css'; // Import your global CSS file

const AdminHome = () => {
    const [trail, setTrail] = useState('');
    const trails = useSelector((state) => state.trails);
    const [userRole, setUserRole] = useState('');
    const [checkpoint, setCheckpoint] = useState('/home');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrails());
        const currentUser = JSON.parse(localStorage.getItem("profile"));
        if (currentUser && currentUser.result) {
            const currentUserRole = currentUser.result.role;
            setUserRole(currentUserRole);
        }
    }, [dispatch]);

    const handleChange = (event) => {
        const selectedTrail = event.target.value;
        setTrail(selectedTrail);
        setCheckpoint("/" + selectedTrail + "Admin");
    };

    return (
        <div /* className="admin-home-container" */>
            <h2>Admin</h2>
            <div /* className="select-trail-container" */>
                <label htmlFor="trail-select">Select a Trail:</label>
                <select id="trail-select" value={trail} onChange={handleChange}>
                    <option value="" disabled>Select a Trail</option>
                    {trails && trails.length > 0 ? (
                        trails.map((trail) => (
                            <option key={trail._id} value={trail.title}>
                                {trail.title}
                            </option>
                        ))
                    ) : (
                        <option disabled>No Trails Available</option>
                    )}
                </select>
            </div>

            <div /* className="admin-actions" */>
                <Link to={checkpoint} /* className="admin-button"*/>Edit CheckPoints</Link><br/>
                <Link to="/trails" /* className="admin-button" */>Create / Manage Trails</Link><br/>
                <Link to="/nutritionAdmin" /* className="admin-button" */>Create / Manage Nutrition</Link><br/>
                {userRole === "SuperAdmin" && (
                    <Link to="/adminPrivilege" /* className="admin-button" */>Assign Admin Privilege</Link>
                )}
            </div>
        </div>
    );
};

export default AdminHome;
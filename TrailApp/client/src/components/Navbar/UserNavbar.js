// Import React components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Import styling & header logo
import '../../interfaceSettings.css';
import GwinnettLogo from '../../assets/images/gwinnett.png';

const UserNavbar = () => {
    // State to handle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // User profile detection
    const profile = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(profile?.payload);
    const [userRole, setUserRole] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        navigate('/#');
        window.location.reload();  // Reload the page after navigating

    };

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("profile"));
        const currentUserRole = currentUser?.result?.role;
        setUserRole(currentUserRole);
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                {/* Logo and "WALKING TRAILS" Header */}
                <Link className="navbar-brand d-flex align-items-center" to={user ? "/userHome" : "/"}>
                    <img src={GwinnettLogo} alt="Gwinnett Logo" className="logo me-2" />
                    <span className="heading">WALKING TRAILS</span>
                </Link>

                {/* Navbar menu toggle button & handler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMenuToggle}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible navbar menu - visibility toggled by isMenuOpen */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/userHome">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/trails">Trails</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exercises">Workout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hydration">Hydration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nutrition">Nutrition</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/climate">Climate</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profileManagement">Manage Profile</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from './gwinnett.png';  // Import the image properly

//README: This page may be deprecated since we are making new Navbars
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu visibility
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
                {/* Logo and "WALKING TRAILS" */}
                <Link className="navbar-brand d-flex align-items-center" to={user ? "/home" : "/"}>
                    <img src={GwinnettLogo} alt="Gwinnett Logo" className="logo me-2" />
                    <span className="heading">WALKING TRAILS</span>
                </Link>

                {/* Menu Toggle Button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMenuToggle} // Handle the click to toggle the menu
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible navbar - visibility toggled by isMenuOpen */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
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
                        {user ? (
                            <li className="nav-item">
                                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link underline-link" to="/auth">Sign in/Sign up</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
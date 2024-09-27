// Import React components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import styling & header logo
import '../../interfaceSettings.css';
import GwinnettLogo from '../../assets/images/gwinnett.png';

const LandingNavbar = () => {

    // State to handle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    // HTML/JSX web page
    // TODO: Redesign page with necessary links for unsigned-in users. Remove extraneous hyperlinks.
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                {/* Logo and "WALKING TRAILS" Header */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
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
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link underline-link" to="/authorization">Sign in/Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default LandingNavbar;
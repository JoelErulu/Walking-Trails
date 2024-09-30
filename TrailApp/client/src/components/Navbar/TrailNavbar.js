// Import React components
import React from 'react';
import { Link } from 'react-router-dom';

// Import styling & header logo
import '../../interfaceSettings.css';

// README: TrailChildNavbar is a mini-navbar created only for Trails pages
const TrailChildNavbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/goldTrail">Gold</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/greenTrail">Green</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/grayTrail">Gray</Link>
                </li>
            </ul>
        </nav>
    );
};

export default TrailChildNavbar;
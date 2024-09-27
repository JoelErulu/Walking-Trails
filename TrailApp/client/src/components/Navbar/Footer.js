// Import React components
import React from 'react';
import { Link } from 'react-router-dom';

// Styling elements. This includes Bootstrap and Material-Ui
//TODO: Unify the styling with Bootstrap and remove all Material-UI components
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import '../../interfaceSettings.css'; // Import the CSS file

const Footer = () => {

    return (
        <AppBar position="static" color="inherit" className="appBar">
            <Toolbar classname='footer-toolbar'>
                <Typography variant="body1" className="footerText">
                    &copy; Walking Trails, Fall 2024 
                </Typography>
                <div classname='footer-links'>
                    <Link className="nav-link" to="/about">About </Link>
                    <Link className="nav-link" to="/privacy">Privacy</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
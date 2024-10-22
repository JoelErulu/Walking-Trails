// Import React components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';


// Import styling & header logo
import '../../interfaceSettings.css';
import GwinnettLogo from '../../assets/images/gwinnett.png';

const AdminNavbar = () => {

    // State to handle mobile menu visibility 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // User profile detection
    // TODO: Inspect & correct this code to serve the purpose of checking that user is logged in, and is of admin roleType
    const profile = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(profile?.payload);
    const  [userRole, setUserRole] = useState('');
    /* [userRole, setUserRole] */

    // TODO: Inspect & describe code behavior, I believe some of these are generic React functions
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    // Function that handles logouts
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        navigate('/#');
    };

    // TODO: Inspect & describe code behavior
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("profile"));
        const currentUserRole = currentUser?.result?.role;
        setUserRole(currentUserRole);
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    // HTML/JSX web page
    // TODO: Redesign page with necessary links for admininstration portals with front end for video handler/statistics viewer REST APIs
    return (
        <Navbar expand={false} className="navbar-custom mb-3">
            <Container fluid>
                <Navbar.Brand as={Link} to="/adminHome" className="d-flex align-items-center">
                    <img src={GwinnettLogo} alt="Gwinnett Logo" className="logo me-2" />
                    <span className="heading-gradient">WALKING TRAILS</span>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="offcanvas-navbar"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <Navbar.Offcanvas
                    id="offcanvas-navbar"
                    placement="end"
                    show={isMenuOpen}
                    onHide={() => setIsMenuOpen(false)}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/adminHome" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/trails" onClick={() => setIsMenuOpen(false)}>
                                Trails
                            </Nav.Link>
                            <Nav.Link as={Link} to="/exercises" onClick={() => setIsMenuOpen(false)}>
                                Exercises
                            </Nav.Link>
                            <Nav.Link as={Link} to="/nutrition" onClick={() => setIsMenuOpen(false)}>
                                Nutrition
                            </Nav.Link>
                            <Nav.Link as={Link} to="/hydration" onClick={() => setIsMenuOpen(false)}>
                                Hydration
                            </Nav.Link>
                            <Nav.Link as={Link} to="/climate" onClick={() => setIsMenuOpen(false)}>
                                Climate
                            </Nav.Link>
                            <Nav.Link as={Link} to="/profileManagement" onClick={() => setIsMenuOpen(false)}>
                                User Profile
                            </Nav.Link>
                            <Nav.Link as={Link} to="/adminManager" onClick={() => setIsMenuOpen(false)}>
                                Media Manager
                            </Nav.Link>
                            <Nav.Link as={Link} to="/adminStatistics" onClick={() => setIsMenuOpen(false)}>
                                Analytics
                            </Nav.Link>
                            <Nav.Link onClick={logout}>
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;
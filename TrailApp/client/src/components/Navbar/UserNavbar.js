// Import React components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Import styling & header logo
import '../../interfaceSettings.css';
import GwinnettLogo from '../../assets/images/ggclogo.svg';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';


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
        <Navbar expand={false} className="navbar-custom mb-3">
            <Container fluid>
                <Navbar.Brand as={Link} to="/userHome" className="d-flex align-items-center">
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
                            <Nav.Link as={Link} to="/userHome" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/trails" onClick={() => setIsMenuOpen(false)}>
                                Trails
                            </Nav.Link>
                            <Nav.Link as={Link} to="/bodyWeightExercises" onClick={() => setIsMenuOpen(false)}>
                                Body Weight Exercises
                            </Nav.Link>
                            <Nav.Link as={Link} to="/strechesForWalking" onClick={() => setIsMenuOpen(false)}>
                                Stretches For Walking
                            </Nav.Link>
                            <Nav.Link as={Link} to="/properWalkingTechniques" onClick={() => setIsMenuOpen(false)}>
                                Proper Walking Techniques
                            </Nav.Link>
                            <Nav.Link as={Link} to="/nutritionandHydration" onClick={() => setIsMenuOpen(false)}>
                                Nutrition and Hydration
                            </Nav.Link>
                            <Nav.Link as={Link} to="/injuryPrevention" onClick={() => setIsMenuOpen(false)}>
                                Injury Prevention
                            </Nav.Link>
                            <Nav.Link as={Link} to="/userControlPanel" onClick={() => setIsMenuOpen(false)}>
                                My Profile
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

export default UserNavbar;
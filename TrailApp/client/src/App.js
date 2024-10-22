// Import React components
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import page components & styling
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer.js';
import PrivateRoute from './api/PrivateRoutes.js';

// Import pages
import Landing from './pages/Landing.js';
import Authorization from './pages/Authorization.js';
import AdminHome from './pages/AdminHome.js'
import AdminManager from './pages/AdminManager.js'
import AdminStatistics from './pages/AdminStatistics.js'
import UserHome from './pages/UserHome.js'
import ProfileManagement from './pages/ProfileManagement.js';
import Trails from './pages/Trails.js';
import Climate from './pages/Climate.js';
import Hydration from './pages/Hydration.js';
import Nutrition from './pages/Nutrition.js';
import Exercises from './pages/Exercises.js';
import About from './pages/About.js'
import Privacy from './pages/Privacy.js'
import GoldTrail from './components/Trails/GoldTrail.js';
import GreenTrail from './components/Trails/GreenTrail.js';
import GrayTrail from './components/Trails/GrayTrail.js';

const App = () => {

    return (
        <BrowserRouter>
            <div className="pages">
                <Navbar />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={< Landing />} />
                    <Route path="/authorization" element={< Authorization />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/privacy" element={< Privacy />} />

                    {/* Authorized Routes */}
                    <Route element={<PrivateRoute allowedRoles={['Admin', 'User']} />}>
                        <Route path="/userHome" element={< UserHome />} />
                        <Route path="/profileManagement" element={< ProfileManagement />} />
                        <Route path ="/trails" element = {< Trails />}/>
                        <Route path ="/climate" element = {< Climate />}/>
                        <Route path ="/hydration" element = {< Hydration />}/>
                        <Route path ="/exercises" element = {< Exercises />}/>
                        <Route path="/nutrition" element={< Nutrition />} />
                        <Route path="/goldTrail" element={< GoldTrail />} />
                        <Route path="/greenTrail" element={< GreenTrail />} />
                        <Route path="/grayTrail" element={< GrayTrail />} />
                    </Route>

                    {/* Admin Routes */}
                    <Route element={<PrivateRoute allowedRoles={['Admin']} />}>
                        <Route path="/adminHome" element={< AdminHome />} />
                        <Route path="/adminManager" element={< AdminManager />} />
                        <Route path="/adminStatistics" element={< AdminStatistics />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
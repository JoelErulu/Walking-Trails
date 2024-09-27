// Import React components
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the GoogleAuthProvider for OAuth functionality
import { GoogleOAuthProvider } from '@react-oauth/google';

// Import page components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer.js';

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
import Gold from './components/BigTrails/Gold.BigTrails';
import Green from './components/BigTrails/Green.BigTrails';
import Gray from './components/BigTrails/Gray.BigTrails';

const App = () => {

    return (
    //The clientId is the unique identifier for the Google OAuth client, enabling the app to integrate Google login.
    //TODO: Replace below value in clientID with an updated one.
    //const oldIdclientId='115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';
    <GoogleOAuthProvider clientId='222736919095-8clp3t7ndllhnf6jt0n1buveh6a97i62.apps.googleusercontent.com'>
        <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={< Landing />} />
                    <Route path="/authorization" element={< Authorization />} />
                    <Route path="/adminHome" element={< AdminHome />} />
                    <Route path="/adminManager" element={< AdminManager />} />
                    <Route path="/adminStatistics" element={< AdminStatistics />} />
                    <Route path="/userHome" element={< UserHome />} />
                    <Route path="/profileManagement" element={< ProfileManagement />} />
                    <Route path ="/trails" element = {< Trails />}/>
                    <Route path ="/climate" element = {< Climate />}/>
                    <Route path ="/hydration" element = {< Hydration />}/>
                    <Route path ="/exercises" element = {< Exercises />}/>
                    <Route path="/nutrition" element={< Nutrition />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/privacy" element={< Privacy />} />

                    <Route path="/gold" element={< Gold />} />
                    <Route path="/green" element={< Green />} />
                    <Route path="/gray" element={< Gray />} />
                </Routes>
                <Footer />
        </BrowserRouter>
    </GoogleOAuthProvider>
    );
}

export default App;
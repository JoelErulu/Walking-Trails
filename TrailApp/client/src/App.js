// Import React components
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the GoogleAuthProvider for OAuth functionality
import { GoogleOAuthProvider } from '@react-oauth/google';

// These imports are for page elements and routing purposes for the browser. Some of these are not needed by the client anymore
// TODO: Remove deprecated pages to clean up repo & better meet customer requirements.

// Import components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer.js';
import Auth from './components/Auth/Auth.js';
import Auth2 from './pages/Authorization.js';

// Import pages
import Landing from './pages/Landing.js';

import AdminHome from './pages/AdminHome.js'
import AdminManager from './pages/AdminManager.js'
import Statistics from './pages/AdminStatistics.js'

import UserHome from './pages/UserHome.js'
import Climate from './pages/Climate.js';
import Hydration from './pages/Hydration.js';
import Nutrition from './pages/Nutrition.js';
import Exercises from './pages/Exercises.js';
import About from './pages/About.js'
import Privacy from './pages/Privacy.js'

//Deprecated pages. If needed, uncomment and fix the filepath. Remember to route it too.
/*
import Library from './pages/Library.js';
import NutritionOld from './pages/NutritionDB - Old.js';
import Blog from './pages/Blog.js';
import ManageTrail from './components/ManageTrail/ManageTrail.js';
import AdminPrivilege from './components/Admin/AdminPrivilege.js';
import Gold from './components/BigTrails/Gold.BigTrails';
import Green from './components/BigTrails/Green.BigTrails';
import Gray from './components/BigTrails/Gray.BigTrails';
import Admin from './components/Admin/Admin.js';
import GoldAdmin from './components/BigTrailsAdmin/GoldAdmin';
import GreenAdmin from './components/BigTrailsAdmin/GreenAdmin';
import GrayAdmin from './components/BigTrailsAdmin/GrayAdmin';
import NutritionAdmin from './components/NutritionAdmin/NutritionAdmin.js';
import Home from './pages/Home.js';
*/

const App = () => {

    return (
    //The clientId is the unique identifier for the Google OAuth client, enabling the app to integrate Google login.
    //TODO: Replace below value in clientID with an updated one. This might be root cause of inability to login.
    //const oldIdclientId='115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';
    <GoogleOAuthProvider clientId='222736919095-8clp3t7ndllhnf6jt0n1buveh6a97i62.apps.googleusercontent.com'>
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" element={< Landing />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/auth2" element={<Auth2 />} />

                    <Route path="/adminHome" element={< AdminHome />} />
                    <Route path="/adminManager" element={< AdminManager />} />
                    <Route path="/statistics" element={< Statistics />} />

                    <Route path="/userHome" element={< UserHome />} />
                    <Route path ="/climate" element = {<Climate/>}/>
                    <Route path ="/hydration" element = {<Hydration/>}/>
                    <Route path ="/exercises" element = {<Exercises/>}/>
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<Privacy />} />

                    {/* 
                    // Deprecated page routing. Uncomment if needed.
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/gold" element={<Gold />} />
                    <Route path="/green" element={<Green />} />
                    <Route path="/gray" element={<Gray />} />
                    <Route path="/trails" element={<ManageTrail />} />
                    <Route path="/adminPrivilege" element={<AdminPrivilege />} />
                    <Route path ="/goldAdmin" element = {<GoldAdmin/>}/>
                    <Route path ="/greenAdmin" element = {<GreenAdmin/>}/>
                    <Route path ="/grayAdmin" element = {<GrayAdmin/>}/>
                    <Route path="/nutritionAdmin" element={<NutritionAdmin />} />
                    */}
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
    );
}

export default App;
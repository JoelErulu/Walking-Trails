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

import LibraryOld from './oldDirectory/pages/Library.js';
import NutritionDBOld from './oldDirectory/pages/NutritionDB.js';
import BlogOld from './oldDirectory/pages/Blog.js';
import NutritionAdminOld from './oldDirectory/components/NutritionAdmin/NutritionAdmin.js';
import HomeOld from './oldDirectory/pages/Home.js';
import AdminOld from './oldDirectory/components/Admin/Admin.js';
import AdminPrivilegeOld from './oldDirectory/components/Admin/AdminPrivilege.js';
import GoldAdminOld from './oldDirectory/components/BigTrailsAdmin/GoldAdmin';
import GreenAdminOld from './oldDirectory/components/BigTrailsAdmin/GreenAdmin';
import GrayAdminOld from './oldDirectory/components/BigTrailsAdmin/GrayAdmin';

import ManageTrail from './components/ManageTrail/ManageTrail.js';
import Gold from './components/BigTrails/Gold.BigTrails';
import Green from './components/BigTrails/Green.BigTrails';
import Gray from './components/BigTrails/Gray.BigTrails';



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
                    <Route path="/auth" element={< Auth />} />
                    <Route path="/auth2" element={< Auth2 />} />

                    <Route path="/adminHome" element={< AdminHome />} />
                    <Route path="/adminManager" element={< AdminManager />} />
                    <Route path="/statistics" element={< Statistics />} />

                    <Route path="/userHome" element={< UserHome />} />
                    <Route path ="/climate" element = {< Climate/>}/>
                    <Route path ="/hydration" element = {< Hydration/>}/>
                    <Route path ="/exercises" element = {< Exercises/>}/>
                    <Route path="/nutrition" element={< Nutrition />} />
                    <Route path="/about" element={< About />} />
                    <Route path="/privacy" element={< Privacy />} />

                    <Route path="/gold" element={<Gold />} />
                    <Route path="/green" element={<Green />} />
                    <Route path="/gray" element={<Gray />} />
                    <Route path="/manageTrail" element={<ManageTrail />} />
                    
                    <Route path="/adminOld" element={< AdminOld />} />
                    <Route path="/adminPrivilegeOld" element={< AdminPrivilegeOld />} />
                    <Route path="/libraryOld" element={< LibraryOld />} />
                    <Route path="/blogOld" element={< BlogOld />} />
                    <Route path="/nutritionDBOld" element={< NutritionDBOld />} />
                    <Route path="/adminOld" element={< AdminOld />} />
                    <Route path="/goldAdminOld" element={< GoldAdminOld />} />
                    <Route path="/greenAdminOld" element={< GreenAdminOld />} />
                    <Route path="/grayAdminOld" element={< GrayAdminOld />} />
                    <Route path="/nutritionAdminOld" element={<NutritionAdminOld />} />
                    <Route path="/homeOld" element={<HomeOld />} />

                    {/* 
                    // Deprecated page routing. Uncomment if needed.
                    

                    */}
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
    );
}

export default App;
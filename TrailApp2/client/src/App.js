import React from 'react';
//import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Navbar/Footer.js';
import Blog from './components/Blog/Blog.js';
import Auth from './components/Auth/Auth.js';
import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home.js';
import ManageTrail from './components/ManageTrail/ManageTrail.js';
import AdminPrivilege from './components/Admin/AdminPrivilege.js';
import Gold from './components/BigTrails/Gold.BigTrails';
import Green from './components/BigTrails/Green.BigTrails';
import Gray from './components/BigTrails/Gray.BigTrails';
import Admin from './components/Admin/Admin.js';
import Library from './components/Library/Library.js';
import Nutrition from './components/Nutrition/Nutrition.js';
import GoldAdmin from './components/BigTrailsAdmin/GoldAdmin';
import GreenAdmin from './components/BigTrailsAdmin/GreenAdmin';
import GrayAdmin from './components/BigTrailsAdmin/GrayAdmin';
//const oldIdclientId='115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';
import NutritionAdmin from './components/NutritionAdmin/NutritionAdmin.js';

const App = () => (
    
    <GoogleOAuthProvider clientId='222736919095-8clp3t7ndllhnf6jt0n1buveh6a97i62.apps.googleusercontent.com'>
        <BrowserRouter>
            
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/gold" element={<Gold />} />
                    <Route path="/green" element={<Green />} />
                    <Route path="/gray" element={<Gray />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/trails" element={<ManageTrail />} />
                    <Route path="/adminPrivilege" element={<AdminPrivilege />} />
                    <Route path ="/goldAdmin" element = {<GoldAdmin/>}/>
                    <Route path ="/greenAdmin" element = {<GreenAdmin/>}/>
                    <Route path ="/grayAdmin" element = {<GrayAdmin/>}/>
                    <Route path="/nutritionAdmin" element={<NutritionAdmin />} />
                </Routes>
                {/* <Footer /> */}
            
        </BrowserRouter>
    </GoogleOAuthProvider>
);

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';
import ExplorePage from './Pages/ExplorePage';
import GardenPage from './Pages/GardenPage';
import HomePage from './Pages/HomePage';
import MyGardenPage from './Pages/MyGardenPage';
import PlantInfoPage from './Pages/PlantInfoPage';
import LoremPage from './Pages/LoremPage';
import { useState, Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import LandingPage from './Pages/LandingPage';
// import virtualGarden from '../public/VirtualGarden'
import Footer from './Layout/Footer'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/old-home" element={<HomePage />} /> */}
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/garden" element={<GardenPage />} />
        <Route path="/my-garden" element={<MyGardenPage />} />
        <Route path="/plant-info" element={<PlantInfoPage />} />
        <Route path="/lorem-ipsum" element={<LoremPage />} />
        <Route path='/home' element={<LandingPage/>} />
        <Route path='/login-page' element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

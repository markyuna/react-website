import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Galerie from './components/Galerie/Galerie';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Pricing from './pages/PricingPage';
import Apropos from './pages/Apropos';
import Etape from './pages/EtapesPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/etapes" element={<Etape />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

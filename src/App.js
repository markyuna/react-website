
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
// import Checkout from './pages/CheckoutPage';

function App() {

  return (
      <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/galerie" component={Galerie} />
        <Route path="/profile" component={Profile} />
        <Route path="/etapes" component={Etape} />
        {/* <Route path="/checkout" element={Checkout} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

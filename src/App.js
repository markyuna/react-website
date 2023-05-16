import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import Galerie from './components/Galerie/Galerie';
import Home from './pages/Home';
import Pricing from './pages/PricingPage';
import Apropos from './pages/Apropos';
import Etape from './pages/EtapesPage';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/galerie" component={Galerie} />
        <Route path="/profile" component={Profile} />
        <Route path="/etapes" component={Etape} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

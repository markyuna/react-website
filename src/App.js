/* eslint-disable react/jsx-no-undef */
import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Galerie from './components/Galerie/Galerie';
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/galerie" component={Galerie} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

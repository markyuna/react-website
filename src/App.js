
import React, {useState} from 'react';
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
import Title from './components/Galerie/Title';
import UploadForm from './components/Galerie/uploadFrom';
import ImageGrid from "./components/Galerie/GridImage"
import Modal from './components/Galerie/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
      <BrowserRouter>
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal SelectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
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

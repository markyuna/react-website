
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fmxasdfx6wxvhrfo.eu.auth0.com"
      clientId="fkidvop0cDkv4MMLJIrUyjhm2rIgEGu1"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

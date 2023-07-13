import React from 'react';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-fmxasdfx6wxvhrfo.eu.auth0.com'
      clientId='fkidvop0cDkv4MMLJIrUyjhm2rIgEGu1'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

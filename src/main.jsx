import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/reset.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App.jsx';
import './firebase.js';
import TokenProvider from './context/TokenContext.jsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);

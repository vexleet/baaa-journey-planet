import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from '@/src/App.jsx';
import './firebase.js';
import TokenProvider from '@/src/context/TokenContext.jsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/src/assets/css/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TokenProvider>
    <App />
  </TokenProvider>
);

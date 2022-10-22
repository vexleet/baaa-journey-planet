import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@/assets/css/reset.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from '@/App.jsx';
import './firebase.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

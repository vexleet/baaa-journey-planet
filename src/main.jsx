import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@/assets/css/reset.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import TokenProvider from '@/context/TokenContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TokenProvider>
  </React.StrictMode>
);

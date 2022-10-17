import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import React from 'react';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
]);

export default router;

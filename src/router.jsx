import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '@/App.jsx';
import Login from '@/pages/Login.jsx';
import Register from '@/pages/Register.jsx';
import AuthGuard from '@/guards/AuthGuard.jsx';
import GuestGuard from '@/guards/GuestGuard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard outlet={<App />} />
  },
  {
    path: '/login',
    element: <GuestGuard outlet={<Login />} />
  },
  {
    path: '/register',
    element: <GuestGuard outlet={<Register />} />
  }
]);

export default router;

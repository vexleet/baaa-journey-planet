import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from '@/pages/Login/Login.jsx';
import Register from '@/pages/Register/Register.jsx';
import AuthGuard from '@/guards/AuthGuard.jsx';
import GuestGuard from '@/guards/GuestGuard.jsx';
import ChooseCategories from '@/pages/ChooseCategories/ChooseCategories.jsx';
import CreatePing from '@/pages/CreatePing/CreatePing.jsx';
import PingsList from '@/pages/PingsList/PingsList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard outlet={<PingsList />} />
  },
  {
    path: '/choose-categories',
    element: <AuthGuard outlet={<ChooseCategories />} />
  },
  {
    path: '/login',
    element: <GuestGuard outlet={<Login />} />
  },
  {
    path: '/register',
    element: <GuestGuard outlet={<Register />} />
  },
  {
    path: '/create-ping',
    element: <AuthGuard outlet={<CreatePing />} />
  }
]);

export default router;

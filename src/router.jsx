import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from '@/pages/Login/Login.jsx';
import Register from '@/pages/Register/Register.jsx';
import AuthGuard from '@/guards/AuthGuard.jsx';
import GuestGuard from '@/guards/GuestGuard.jsx';
import ChooseCategories from '@/pages/ChooseCategories/ChooseCategories.jsx';
import MyComponent from '@/components/MyComponent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard outlet={<MyComponent />} />
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
  }
]);

export default router;

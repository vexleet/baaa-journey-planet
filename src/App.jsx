import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTokenContext } from '@/context/TokenContext.jsx';
import PingsList from '@/pages/PingsList/PingsList.jsx';
import AuthGuard from '@/guards/AuthGuard.jsx';
import Login from '@/pages/Login/Login.jsx';
import GuestGuard from '@/guards/GuestGuard.jsx';
import ChooseCategories from '@/pages/ChooseCategories/ChooseCategories.jsx';
import Register from '@/pages/Register/Register.jsx';
import CreatePing from '@/pages/CreatePing/CreatePing.jsx';
import Navigation from '@/components/Navigation/Navigation.jsx';

function App() {
  const { user } = useTokenContext();

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);
  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthGuard outlet={<PingsList />} />} />
          <Route path="/login" element={<GuestGuard outlet={<Login />} />} />
          <Route path="/register" element={<GuestGuard outlet={<Register />} />} />
          <Route path="/choose-categories" element={<AuthGuard outlet={<ChooseCategories />} />} />
          <Route path="/create-ping" element={<AuthGuard outlet={<CreatePing />} />} />
        </Routes>
        {user && <Navigation />}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

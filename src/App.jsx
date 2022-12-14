import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTokenContext } from '@/src/context/TokenContext.jsx';
import AuthGuard from '@/src/guards/AuthGuard.jsx';
import Login from '@/src/pages/Login/Login.jsx';
import GuestGuard from '@/src/guards/GuestGuard.jsx';
import ChooseCategories from '@/src/pages/ChooseCategories/ChooseCategories.jsx';
import Register from '@/src/pages/Register/Register.jsx';
import Discover from '@/src/pages/Discover';
import LoadingScreen from '@/src/components/LoadingScreen';
import PlanTrip from '@/src/pages/PlanTrip';
import CreatePin from '@/src/pages/CreatePin';
import Navigation from '@/src/components/Navigation';
import MyProfile from '@/src/pages/MyProfile/index.jsx';
import Home from '@/src/pages/Home';

function App() {
  const { user, isInitialized } = useTokenContext();

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return isInitialized ? (
    <div style={{ paddingBottom: user ? 50 : 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthGuard outlet={<Home />} />} />
          <Route path="/login" element={<GuestGuard outlet={<Login />} />} />
          <Route path="/register" element={<GuestGuard outlet={<Register />} />} />
          <Route path="/choose-categories" element={<AuthGuard outlet={<ChooseCategories />} />} />
          <Route path="/create-pin" element={<AuthGuard outlet={<CreatePin />} />} />
          <Route path="/plan-trip/:id" element={<AuthGuard outlet={<PlanTrip />} />} />
          <Route path="/profile" element={<AuthGuard outlet={<MyProfile />} />} />
          <Route path="/discover" element={<AuthGuard outlet={<Discover />} />} />
        </Routes>
        {user && <Navigation />}
      </BrowserRouter>
      <ToastContainer />
    </div>
  ) : (
    <LoadingScreen />
  );
}

export default App;

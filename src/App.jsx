import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '@/router.jsx';
import { ToastContainer } from 'react-toastify';
import { useTokenContext } from '@/context/TokenContext.jsx';

function App() {
  const { user } = useTokenContext();

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);
  return (
    <div style={{ height: '100%' }}>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TokenProvider from '@/context/TokenContext.jsx';
import { RouterProvider } from 'react-router-dom';
import router from '@/router.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <TokenProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </TokenProvider>
    </div>
  );
}

export default App;

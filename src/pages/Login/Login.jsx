//Kris

import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import './Login.styles.css';
import GoogleLoginButton from '@/src/components/GoogleLoginButton/GoogleLoginButton.jsx';
import TextField from '@/src/components/TextField/TextField.jsx';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const authentication = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(authentication, email, password);
    } catch (e) {
      if (authentication) {
        toast('Your email or password is incorrent. Please try again', { type: 'error' });
      }
    }
  };

  return (
    <div className="login-wrapper">
      <img className="logo" src="/images/logo.svg" alt="Journey Planet Logo" />
      <p className="app-name"> Plan B</p>
      <GoogleLoginButton />

      <p style={{ marginTop: 20, marginBottom: 15, color: 'var(--lightgrey)' }}>or</p>

      <form onSubmit={submitLogin} className="login-form">
        <TextField
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
        />

        <TextField
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="Password"
        />

        <Link to="/forgot-password">Forgot password?</Link>

        <button type="submit" className="primary-button">
          Log in
        </button>
      </form>

      <p style={{ marginTop: 30, color: 'var(--lightgrey' }}>
        No account? <Link to="/register">Sign up</Link>
      </p>

      <p className="agree-terms">
        By continuing, you agree to JourneyPlanet <Link to="#">Terms of Service</Link> and
        acknowledge that you have read our <Link to="#">Privacy Policy</Link>.
      </p>
    </div>
  );
};

export default Login;

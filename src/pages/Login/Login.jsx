import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import './Login.styles.css';
import GoogleLoginButton from '@/components/GoogleLoginButton/GoogleLoginButton.jsx';
import TextField from '@/components/TextField/TextField.jsx';
import { Link } from 'react-router-dom';

const Login = () => {
  const authentication = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(authentication, email, password);
    } catch (e) {
      //TODO SHOW ERROR
      console.log(e);
    }
  };

  return (
    <div className="login-wrapper">
      <img className="logo" src="src/assets/images/logo.svg" alt="Journey Planet Logo" />
      <GoogleLoginButton />

      <p style={{ marginTop: 15, marginBottom: 15 }}>or</p>

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

        <button type="submit" className="login-form-submit">
          Log in
        </button>
      </form>

      <p style={{ marginTop: 30 }}>
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

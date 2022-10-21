import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import TextField from '@/components/TextField/TextField.jsx';
import { toast } from 'react-toastify';
import './Register.styles.css';
import GoBackArrow from '@/components/GoBackArrow/GoBackArrow.jsx';

const Register = () => {
  const authentication = getAuth();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const checkFormIsValid = () => {
    if (email === '' || username === '' || password === '' || repeatPassword === '') {
      toast('Fill all fields!', { type: 'error' });
      throw new Error('Fill all fields');
    }

    if (password !== repeatPassword) {
      toast('Passwords do not match!', { type: 'error' });
      throw new Error('Password do not match!');
    }
  };

  const submitRegister = async (e) => {
    e.preventDefault();

    try {
      checkFormIsValid();

      const response = await createUserWithEmailAndPassword(authentication, email, password);
      await updateProfile(authentication.currentUser, { displayName: username });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register-wrapper">
      <div style={{ marginBottom: 20, alignSelf: 'flex-start' }}>
        <GoBackArrow goTo="/login" />
      </div>

      <p className="register-title">Lets get you started on your journey around the world!</p>

      <form onSubmit={submitRegister} style={{ width: '100%' }}>
        <TextField
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          label="Username"
        />

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

        <TextField
          id="repeat-password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          type="password"
          label="Repeat Password"
        />

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

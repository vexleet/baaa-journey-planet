import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useTokenContext } from '@/context/TokenContext.jsx';

const Login = () => {
  const authentication = getAuth();
  const { setToken } = useTokenContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(authentication, email, password);
      const token = await response.user.getIdToken();

      setToken(token);
    } catch (e) {
      //TODO SHOW ERROR
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <input
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <input
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button onClick={submitLogin}>log in</button>
    </div>
  );
};

export default Login;

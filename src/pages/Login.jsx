import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const Login = () => {
  const authentication = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async () => {
    const response = await signInWithEmailAndPassword(authentication, email, password);

    console.log(response);
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

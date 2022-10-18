import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const authentication = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(authentication, email, password);

      console.log(response);
    } catch (e) {
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
      <button onClick={submitRegister}>Register</button>
    </div>
  );
};

export default Register;

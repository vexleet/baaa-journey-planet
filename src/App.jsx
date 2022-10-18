import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import MyComponent from '@/components/MyComponent.jsx';
import './firebase.js';
import { useTokenContext } from '@/context/TokenContext.jsx';

function App() {
  const { deleteToken } = useTokenContext();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyComponent message="hello world" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={deleteToken}>Logout</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;

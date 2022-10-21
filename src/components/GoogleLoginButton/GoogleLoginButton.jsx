import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useTokenContext } from '@/context/TokenContext.jsx';
import './GoogleLoginButton.styles.css';

const GoogleLoginButton = () => {
  const authentication = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const { setToken } = useTokenContext();

  useEffect(() => {
    googleProvider.setCustomParameters({ prompt: 'select_account' });
  }, []);

  const continueWithGoogle = async () => {
    try {
      const response = await signInWithPopup(authentication, googleProvider);
      const token = await response.user.getIdToken();

      setToken(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button onClick={continueWithGoogle} className="google-button">
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;

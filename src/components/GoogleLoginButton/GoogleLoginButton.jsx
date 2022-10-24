import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import './GoogleLoginButton.styles.css';

const GoogleLoginButton = () => {
  const authentication = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    googleProvider.setCustomParameters({ prompt: 'select_account' });
  }, []);

  const continueWithGoogle = async () => {
    try {
      await signInWithPopup(authentication, googleProvider);
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

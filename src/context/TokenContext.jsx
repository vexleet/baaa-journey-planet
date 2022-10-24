import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

const TokenContext = createContext({
  user: null,
  deleteToken: () => {
    return;
  }
});

export const TokenProvider = ({ children }) => {
  const authentication = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (currentUser) => {
      console.log('Auth', currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [user, setUser] = useState(null);

  const deleteToken = async () => {
    await signOut(authentication);
  };

  return (
    <TokenContext.Provider
      value={{
        user,
        deleteToken
      }}>
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default TokenProvider;

export const useTokenContext = () => useContext(TokenContext);

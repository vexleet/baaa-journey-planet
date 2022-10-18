import { createContext, useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

const TokenContext = createContext({
  setToken: (userToken) => {
    return userToken;
  },
  token: null,
  decodedToken: null,
  deleteToken: () => {
    return;
  }
});

const TOKEN = 'TOKEN';

export const TokenProvider = ({ children }) => {
  const getToken = () => localStorage.getItem(TOKEN);

  const decodeToken = (token) => {
    if (token) {
      return jwtDecode(token);
    }

    return null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem(TOKEN, userToken);
    setToken(userToken);
  };

  const deleteToken = () => {
    localStorage.removeItem(TOKEN);
    setToken(null);
  };

  return (
    <TokenContext.Provider
      value={{
        setToken: saveToken,
        token,
        decodedToken: decodeToken(token),
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

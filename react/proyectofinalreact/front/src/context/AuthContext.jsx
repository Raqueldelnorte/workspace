// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseJwt } from '../utils/parseJwt';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null });

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = parseJwt(token);
      if (decodedToken) {
        console.log('Token decodificado:', decodedToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          // Asegúrate de establecer 'auth.user' como 'decodedToken.user'
          setAuth({ user: decodedToken.user });
        } else {
          // Token expirado
          localStorage.removeItem('jwtToken');
        }
      } else {
        console.error('Error decodificando el token');
        localStorage.removeItem('jwtToken');
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setAuth({ user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;





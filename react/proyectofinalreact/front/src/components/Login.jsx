// src/components/Login.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Importa api.jsx
import AuthContext from '../context/AuthContext';
import { parseJwt } from '../utils/parseJwt';
import './Login.css'; // Importa el archivo CSS 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const loginData = { username, password };
      const response = await api.getToken(loginData);

      const token = response.token;
      localStorage.setItem('jwtToken', token);

      const decodedUser = parseJwt(token);
      console.log('Usuario decodificado en Login:', decodedUser);

      // Actualiza el contexto de autenticación con los datos del usuario
      setAuth({ user: decodedUser.user });

      navigate('/dashboard/profile');
    } catch (error) {
      setError(error.message || 'Error al iniciar sesión');
      console.error('Error en el login:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar</button>
      </form>
    </div>
  );
}

export default Login;


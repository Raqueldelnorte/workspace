// src/components/Profile.jsx
import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

function Profile() {
  const { auth } = useContext(AuthContext);
  const user = auth.user;

  useEffect(() => {
    console.log('Datos del usuario en Profile:', user);
  }, [user]);

  return (
    <div>
      <h2>Mi Perfil</h2>
      {user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Activo:</strong> {user.active ? 'Sí' : 'No'}</p>
          <p><strong>Rol:</strong> {user.type}</p>
        </div>
      ) : (
        <p>No se ha podido cargar la información del usuario.</p>
      )}
    </div>
  );
}

export default Profile;


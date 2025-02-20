// src/components/UsersList.jsx
import { useState, useEffect } from 'react';
import api from '../api';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para manejar la eliminación del usuario
  const handleDeleteUser = async (userId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      try {
        // Llamada a la API para eliminar al usuario
        await api.deleteUser(userId);  // Usamos la función creada en api.js
        // Eliminar el usuario de la lista local después de la eliminación exitosa
        setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
        console.error('Error eliminando el usuario:', error);
        setError('Error al eliminar el usuario');
      }
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getAllUsers();
        setUsers(data);
      } catch (error) {
        setError(error.message || 'Error al cargar usuarios');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Activo</th>
            <th>Tipo</th>
            <th>Acciones</th> {/* Nueva columna para las acciones */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email || 'Sin email'}</td>
              <td>{user.active ? 'Sí' : 'No'}</td>
              <td>{user.type || 'Sin tipo'}</td>
              <td>
                {/* Botón para eliminar usuario */}
                <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;



import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Sidebar() {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userRole = auth.user?.type; // Actualizado para usar 'type'

  // Definir opciones de menú basadas en el rol del usuario
  const menuItems = [
    { label: 'Profile', path: '/dashboard/profile', roles: ['admin', 'teacher', 'student'] },
  ];

  if (userRole === 'admin') {
    menuItems.push({ label: 'Users', path: '/dashboard/users', roles: ['admin'] });
  } else if (userRole === 'teacher') {
    menuItems.push({ label: 'Students', path: '/dashboard/students', roles: ['teacher'] });
  }

  return (
    <aside className="sidebar">
      <h2>Menú</h2>

      {/* Perfil del Usuario */}
      <div className="user-profile">
        <p><strong>Email:</strong> {auth.user?.email}</p>
        <p><strong>Rol:</strong> {auth.user?.type}</p>
      </div>

      {/* Opciones del Menú */}
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de Logout */}
      <button onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </aside>
  );
}

export default Sidebar;



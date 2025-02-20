// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import UsersList from './components/UsersList';
import StudentsList from './components/StudentsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* ... */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Rutas anidadas dentro de DashboardLayout */}
            {/* Ruta accesible para todos los usuarios autenticados */}
            <Route path="profile" element={<Profile />} />

            {/* Ruta para 'Users' solo accesible por 'admin' */}
            <Route
              path="users"
              element={
                <ProtectedRoute roles={['admin']}>
                  <UsersList />
                </ProtectedRoute>
              }
            />

            {/* Ruta para 'Students' solo accesible por 'teacher' */}
            <Route
              path="students"
              element={
                <ProtectedRoute roles={['teacher']}>
                  <StudentsList />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
        {/* ... */}
      </div>
    </Router>
  );
}

export default App;



// src/components/StudentsList.jsx
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import api from '../api';

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);
      try {
        // Suponiendo que hay un endpoint para obtener los estudiantes de un profesor
        const data = await api.getStudentsByTeacherId(auth.user.id);
        setStudents(data);
      } catch (error) {
        setError(error.message || 'Error al cargar estudiantes');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [auth.user.id]);

  if (loading) {
    return <p>Cargando estudiantes...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} (ID: {student.id})</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;

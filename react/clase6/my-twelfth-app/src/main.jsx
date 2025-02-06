import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Agregamos el enrutador
import PublicLayout from './routes/PublicLayout';
import Clock from './routes/Clock';  // Componente de la ruta /clock
import TableUsers from './routes/TableUsers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Usamos el Router para envolver las rutas */}
      <Routes>
        {/* Ruta principal que usa el layout PublicLayout */}
        <Route path="/" element={<PublicLayout />}>
          {/* Rutas hijas que se renderizan dentro del <Outlet /> */}
          <Route path="clock" element={<Clock />} />
          <Route path="people" element={<TableUsers />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);

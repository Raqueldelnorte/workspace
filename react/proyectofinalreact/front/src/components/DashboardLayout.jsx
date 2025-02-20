// src/components/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      <Sidebar /> {/* Menú lateral */}
      <div className="main-content" style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Renderiza el componente correspondiente a la ruta */}
      </div>
    </div>
  );
}

export default DashboardLayout;


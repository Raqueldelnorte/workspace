import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Título principal */}
        <h1>Hello World!</h1>

        {/* Descripción */}
        <p>Este es el primer paso para crear una aplicación React.</p>

        {/* Botón con estilo */}
        <button className="App-button" onClick={() => alert('¡Hola desde el botón!')}>
          Haz clic aquí
        </button>

        {/* Texto adicional */}
        <p>Este es un elemento extra que se ha añadido.</p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Asegúrate de que está importando index.css

class App extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>  // Renderiza "Hello World!"
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

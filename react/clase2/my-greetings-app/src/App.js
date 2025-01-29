import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Saludos Personalizados</h1>
        <Welcome name="Raquel" />
        <Welcome name="Luisa" />
        <Welcome name="Mario" />
      </div>
    );
  }
}

export default App;

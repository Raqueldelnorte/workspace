import React, { Component } from 'react';
import Greeting from "./Greeting";
import Warning from './Warning';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado en el constructor
    this.state = {
      isLoggedIn: false,
    };
    // Vinculamos los métodos con this
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  // Método que cambia el estado cuando el usuario inicia sesión
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  // Método que cambia el estado cuando el usuario cierra sesión
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    // Asignamos el botón dependiendo de si el usuario está logueado o no
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>Cerrar sesión</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>Iniciar sesión</button>;
    }
    return (
      <div>
        {/* Renderizamos el componente Warning con la prop warn */}
        <Warning warn={!isLoggedIn} />
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
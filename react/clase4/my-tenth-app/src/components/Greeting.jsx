import React from 'react';
import UserGreeting from './UserGreeting';
import SignUp from './SignUp';

function Greeting(props) {
  // Si el usuario está logueado, mostrar el mensaje de bienvenida
  if (props.isLoggedIn) {
    return <UserGreeting />;
  } else {
    // Si el usuario no está logueado, mostrar el mensaje de registro/inicio de sesión
    return <SignUp />;
  }
}

export default Greeting;

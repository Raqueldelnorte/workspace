import React from 'react';
import './App.css';

const FancyBorder = (props) => {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Bienvenido!</h1>
      <p className="Dialog-message">Explora todos nuestros servicios!</p>
    </FancyBorder>
  );
};

const GoodByeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Adios!</h1>
      <p className="Dialog-message">Gracias por visitar nuestra web!</p>
    </FancyBorder>
  );
};

const App = () => {
  return (
    <div className="App">
      <WelcomeDialog />
      <GoodByeDialog />
    </div>
  );
};

export default App;

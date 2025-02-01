import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Componente FancyBorder
const FancyBorder=(props) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

// Componente WelcomeDialog
const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className= "Dialog-title">Bienvenido!</h1>
      <p className="Dialog-message">Explora todos nuestros productos!</p>
    </FancyBorder>
  );
}

// Componente GoodByeDialog
const GoodByeDialog= () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Adiós!</h1>
      <p className="Dialog-message">Gracias por visitar nuestra web!</p>
    </FancyBorder>
  );
}

const App = () =>{
  return (
    <>
    <WelcomeDialog />
    <GoodByeDialog />
    </>
  );
};

export default App;

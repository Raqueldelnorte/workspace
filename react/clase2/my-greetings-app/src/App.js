import React from "react";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <h1>Saludos Personalizados</h1>
      <Welcome name="Raquel" />
      <Welcome name="Teresa" />
      <Welcome name="Lucía" />
    </div>
  );
};

export default App;


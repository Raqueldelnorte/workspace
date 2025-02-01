import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado con la fecha y hora actuales
    this.state = { date: new Date() };
  }
// Este método se ejecuta cuando el componente se monta en el DOM
componentDidMount() {
  // Establecemos un intervalo para actualizar el estado cada segundo
  this.timerID = setInterval(() => this.tick(), 1000);
}
// Este método se ejecuta cuando el componente se desmonta
componentWillUnmount() {
  // Limpiamos el intervalo para evitar que siga ejecutándose después de que el componente se desmonte
  clearInterval(this.timerID);
}
  // Método para actualizar la fecha en el estado
  tick() {
    this.setState({ date: new Date() });
  }
 
  render() {
    // Renderizamos la fecha actual en formato string
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
}
const App = () => {
  return <Clock />;
};
   
export default App;

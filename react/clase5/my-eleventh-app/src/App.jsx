import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // Enlazamos los métodos para que 'this' funcione correctamente
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Método para manejar el cambio en el input
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // Método para manejar el envío del formulario
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault(); // Evita que la página se recargue
  }

  render() {
    return (
      <div className="App">
        <h2>Formulario en React</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

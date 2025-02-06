// src/Form.js
import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: "",
    job: "",    
  };
  state = this.initialState;
  // Función para manejar los cambios en los campos del formulario
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,  // Actualiza el estado según el campo que cambió
    });
  };

  // Función para manejar el envío del formulario
  submitForm = () => {
    console.log('Datos enviados:', this.state); // Verifica si los datos son correctos
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    };
render() {
    const { name, job } = this.state;
    return (
        <form>
            <label htmlFor="name">Nombre</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
            />
            <label htmlFor="job">Job</label>    
            <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange}
            />
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
    );
    }
}

export default Form;

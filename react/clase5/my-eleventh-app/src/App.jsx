// src/App.jsx
import React from 'react';
import Form from './Form';  // Importamos el formulario
import StudentList from './StudentList';  // Importamos el componente para la lista de estudiantes

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editableValue: '',  // Estado para el campo editable
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };

  handleChange = (event) => {
    this.setState({ editableValue: event.target.value });
  };

  render() {
    const students = [
      { id: 1, name: 'María River' },
      { id: 2, name: 'Lucas Moon' },
    ];

    return (
      <div>
        <h1>Ejemplo de Formulario</h1>
        
        {/* Mostrar el formulario principal */}
        <Form />

        {/* Mostrar el formulario con campos */}
        <form onSubmit={this.handleSubmit}>
          <label>
            No editable:
            <input type="text" value="hi" readOnly />
          </label>
          
          <label>
            Editable:
            <input
              type="text"
              value={this.state.editableValue}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>

        {/* Mostrar la lista de estudiantes */}
        <h2>Student List</h2>
        <StudentList students={students} />
      </div>
    );
  }
}

export default App;

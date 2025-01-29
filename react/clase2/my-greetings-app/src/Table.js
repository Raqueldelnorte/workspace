// src/Table.js
import React, { Component } from 'react';
// Componente funcional con arrow function 
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    );
    };
// Componente funcional con función tradicional
function TableBody(props) {
  // Aquí recibimos peopleData como propiedad
  const { peopleData } = props;  // Extraemos peopleData de las props

  return (
      <tbody>
          {/* Usamos map() para crear una fila por cada elemento en el array peopleData */}
          {peopleData.map((person, index) => (
              <tr key={index}>  {/* Usamos index como key para cada fila */}
                  <td>{person.name}</td>
                  <td>{person.job}</td>
              </tr>
          ))}
      </tbody>
  );
}

// Componente de clase
class Table extends Component {
  render() {
    const {peopleData, title} = this.props; // Extraemos peopleData y title de las props
      return (
        <>
        {title}
          <table>
              <TableHeader />
              <TableBody peopleData={this.props.peopleData} /> {/* Pasamos la propiedad peopleData */}
          </table>
          </>
      );
  }
}

export default Table;
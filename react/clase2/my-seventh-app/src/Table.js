// src/Table.js
import React, { Component } from 'react';
// Componente funcional con arrow function 
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th> {/* Añadimos una columna para el botón de eliminar */}
        </tr>
      </thead>
    );
  };
// Componente funcional con función tradicional
function TableBody(props) {
    const { peopleData, removePeople } = props;  // Extraemos removePeople también de las props
  
    return (
      <tbody>
        {peopleData.map((person, index) => (
          <tr key={index}> {/* Usamos index como key para cada fila */}
            <td>{person.name}</td>
            <td>{person.job}</td>
            <td>
              {/* Botón para eliminar la persona, pasa el índice a removePeople */}
              <button onClick={() => removePeople(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

// Componente de clase
class Table extends Component {
  render() {
    const {peopleData, title,removePeople} = this.props; // Extraemos peopleData y title de las props
      return (
        <>
        {title}
          <table>
            <TableHeader />
            {/* Pasamos peopleData y removePeople a TableBody */}
            <TableBody peopleData={peopleData} removePeople={removePeople} />
        </table>
      </>
    );
  }
}
export default Table;
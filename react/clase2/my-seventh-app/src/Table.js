// src/Table.js
import React, { Component } from 'react';
// Componente funcional con arrow function 
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th> {/* Añadimos una columna para el botón de eliminar */}
        </tr>
      </thead>
    );
  };
// Componente funcional con función tradicional
function TableBody(props) {
  const rows = props.peopleData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removePeople(index)}>Delete</button> {/* Añadimos un botón para eliminar */}
        </td>
      </tr>
    );
  });
return <tbody>{rows}</tbody>;
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
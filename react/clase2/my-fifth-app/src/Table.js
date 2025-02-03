import React, { Component } from 'react';
import PropTypes from 'prop-types';  // Importa PropTypes
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
function TableBody(props) {
    const rows = props.peopleData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

// Componente de clase
class Table extends Component {
  render() {
    const { peopleData } = this.props; // Extraemos peopleData de las props
    return (
      <table>
        <TableHeader />
        <TableBody peopleData={peopleData} /> {/* Pasamos peopleData a TableBody */}
      </table>
    );
  }
}
// Validación de las props con PropTypes
Table.propTypes = {
    peopleData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired
      })
    ).isRequired
  };
  
export default Table;

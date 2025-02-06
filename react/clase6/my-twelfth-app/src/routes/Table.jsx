import React from 'react';

const Table = ({ peopleData, removePeople }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {peopleData.map((person, index) => (
          <tr key={index}>
            <td>{person.firstName} {person.lastName}</td>
            <td>{person.job}</td>
            <td>
              <button onClick={() => removePeople(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React, { Component } from 'react';
import './TableUsers.css'; // Importa los estilos

class TableUsers extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ people: data.users });
      })
      .catch((error) => console.error('Error fetching users:', error));
  }

  removePerson = (index) => {
    const { people } = this.state;
    this.setState({
      people: people.filter((person, i) => i !== index),
    });
  };

  render() {
    const { people } = this.state;

    return (
      <div className="container">
        <h1>Users Table</h1>
        <table className="users-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={person.id}>
                <td>
                  <img
                    src={person.image}
                    alt={person.firstName}
                    width="50"
                    style={{ borderRadius: '50%' }}
                  />
                </td>
                <td>{person.firstName} {person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.age}</td>
                <td>
                  <button className="delete-btn" onClick={() => this.removePerson(index)}>
                    ❌ Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableUsers;

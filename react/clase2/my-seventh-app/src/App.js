import React, { Component } from 'react'; 
import Table from './Table';
import './App.css';
import Form from './form';

class App extends Component {
  state = {
    people: []
};

removePeople = (index) => {
  const { people } = this.state;
  this.setState({
    people: people.filter((person, i) => {
      return i !== index;
    }),
  });
};
handleSubmit = (person) => {
  this.setState({ people: [...this.state.people, person] });
};
render() {
  const title = <h1>Nice People</h1>;
  return (
    <div className="container">
      <Table 
      peopleData={this.state.people} 
      removePeople={this.removePeople}
      title= {title} 
      />
      <Form handleSubmit={this.handleSubmit} />
    </div>
  );
  }
}

export default App;

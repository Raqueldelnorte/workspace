import React, { Component } from 'react'; 
import Table from './Table';
import './App.css';

class App extends Component {
  state = {
    people: [
      { name: 'John', job: 'Developer' },
      { name: 'Maya', job: 'Architect' },
    ]
  };

removePeople = (index) => {
  const { people } = this.state;
  this.setState({
    people: people.filter((person, i) => {
      return i !== index;
    }),
  });
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
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react'; 
import Table from './Table';
import './App.css';

class App extends Component {
  render() {
    const people = [
      { 
        name: 'John', 
        job: 'Developer' 
      },
      { name: 'Ana', 
        job: 'Architect' 
      },
    ];
    const title = <h1>Nice people</h1>;
    return (
      <div className="container">
        <Table peopleData={people} title={title}/>
      </div>
    );
  }
}

export default App;

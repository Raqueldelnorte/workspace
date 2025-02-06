import React, { useState } from 'react'; 
import Table from './Table';
import './App.css';
import Form from './form';

const App = () => {
  const [people, setPeople] = useState([]); //inicializa vacío
  const removePeople = (index) => {
    setPeople(people.filter((person, i) => {
      return i !== index;
    }));
  };
  const handleSubmit = (person) => {
    setPeople([...people, person]);
  };
  const title = <h1>Nice People</h1>; 
  return (
    <div className="container">
      <Table 
      peopleData={people} 
      removePeople={removePeople}
      title= {title} 
      />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};
  
export default App;

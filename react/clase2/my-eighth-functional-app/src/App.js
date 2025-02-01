import React, {useState, useEffect} from 'react';
import './App.css';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleDateString()}.</h2>
    </div>
  );
};
const App = () => {
  return <Clock />
};

export default App;

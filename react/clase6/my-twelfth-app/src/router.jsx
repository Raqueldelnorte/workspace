import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Clock from './Clock';           
import TableUsers from './routes/TableUsers';  


const Navigation = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/clock" element={<Clock />} />
            <Route path="/people" element={<TableUsers />} />
            <Route path="/" element={<Clock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default RouterComponent;

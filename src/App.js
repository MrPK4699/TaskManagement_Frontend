import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import AllTasks from './pages/AllTasks'; // Import the component for All Tasks
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  console.log(process.env.REACT_APP_serverUrl)

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState('');

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setIsLoggedIn(false);
  //   setUserName('');
  // };

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<AllTasks />} />
          {/* <Route path="/dashboard" element={<Dashboard userName={userName} />} />
          <Route path="/dashboard" element={<Dashboard userName={userName} />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

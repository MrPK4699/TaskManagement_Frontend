import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    window.location.href = '/';
  };
  const userName= localStorage.getItem('user');
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Task Manager App</Link>
        <span className="navbar-text">Welcome, {userName}</span>
        <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
      </div>
    </nav>
  );
};
 
export default Navbar;

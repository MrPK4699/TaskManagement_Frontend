import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  let haveAccount=false;
  if(localStorage.getItem('token') && localStorage.getItem('user') && localStorage.getItem('email') ){
    haveAccount=true;
  }
  else{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
  }
  return (
    <div className="container mt-5">
      <h1>Welcome to Task Manager App</h1>
      <div className="row mt-4">
        {haveAccount && <div className="col-md-6">
          <Link to="/dashboard" className="btn btn-secondary btn-lg btn-block">Go to Dashboard</Link>
        </div>}
        <div className="col-md-6">
          <Link to="/register" className="btn btn-primary btn-lg btn-block">Register</Link>
        </div>
        <div className="col-md-6">
          <Link to="/login" className="btn btn-secondary btn-lg btn-block">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

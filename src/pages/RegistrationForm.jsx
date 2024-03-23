import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  './registeration.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(1);
  const [about, setAbout] = useState('');

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/api/auth/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, email, password }) // Include 'email' field in the request body
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       // Registration successful, redirect to login page
  //       window.location.href = '/login';
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, age, about })
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        // Registration successful, redirect to login page
        console.log(' Registration successful, redirect to login page')
        window.location.href = '/login';
      } else {
        // Registration failed, display error message
        alert(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    // <div className="container mt-5">
    //   <h2>Registration</h2>
    //   <form onSubmit={handleRegister}>
    //     <div className="form-group">
    //       <label htmlFor="username">Username</label>
    //       <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    //     </div>
    //     {/* <div className="form-group">
    //       <label htmlFor="age">Age</label>
    //       <input type="Number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="about">About</label>
    //       <input type="text" className="form-control" id="about" value={about} onChange={(e) => setAbout(e.target.value)} />
    //     </div> */}
    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </div>
    //     <button type="submit" className="btn btn-primary">Register</button>
    //   </form>
    //   <div className="mt-3">
    //     <Link to="/login" className="btn btn-secondary">Login</Link>
    //   </div>
    // </div>
    <section className="vh-100">
      <div margin-top="400px" className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <br/>
          <br/>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleRegister}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Register with Email ID</p>
              </div>
              <br/>
              <br/>
              <div className="form-outline mb-4">
                <input type="text" id="username" className="form-control form-control-lg"
                  placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label className="form-label" htmlFor="name">Username</label>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="email" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="form-label" htmlFor="email">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="password" className="form-control form-control-lg"
                  placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                    className="link-danger">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;

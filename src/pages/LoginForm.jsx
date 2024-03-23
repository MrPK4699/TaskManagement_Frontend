// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState(''); // Change state variable name to 'email'
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password }) // Update 'username' to 'email'
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', data.name);
//         localStorage.setItem('email', data.email);
//         window.location.href = '/dashboard';
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label> {/* Change label to 'Email' */}
//           <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Change type to 'email' */}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <div className="mt-3">
//         <Link to="/register" className="btn btn-secondary">Register</Link>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  "./login.css"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(process.env.serverUrl)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.name);
        localStorage.setItem('email', data.email);
        window.location.href = '/dashboard';
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
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
            <form onSubmit={handleLogin}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with Email ID</p>
                {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button> */}
              </div>
              <br/>
              <br/>
              {/* <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div> */}
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

              {/* <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div> */}

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                    className="link-danger">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        {/* <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default LoginForm;


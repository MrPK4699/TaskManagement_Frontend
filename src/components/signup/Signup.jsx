import React from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    age : 1,
    about : ""
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    // await axios
    //   .post(`http://localhost:5000/api/auth/register`, Inputs)
    //   .then((response) => {
    //     if (response.data.msg === "User Already Exists") {
    //       alert(response.data.message);
    //     } else {
    //       alert(response.data.message);
    //       setInputs({
    //         email: "",
    //         username: "",
    //         password: "",
    //         age : 1,
    //         about : ""
    //       });
    //       history("/signin");
    //     }
    //   });
      try {
        const response = await axios.post(`https://taskmanagementbackend-production-9dd5.up.railway.app/api/auth/register`, Inputs);
        // const data = await response;
        console.log(response);
        setInputs({ email: "", username: "", password: "", age : 1, about : ""});
        if (response.status===201) {
          // Registration successful, redirect to login page
          console.log(' Registration successful, redirect to login page')
          history("/signin");
        } else {
          // Registration failed, display error message
          alert(response.error || 'Registration failed');
        }
        history("/signin");
      } catch (error) {
        // console.error('Error:', error.response.data.error);
        // alert(`An error occurred. Please try again.`);
        // alert(`${error.response.data.error}`);
      }
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
            <div className="d-flex flex-column  w-100 p-3">
              <input
                className="p-2  my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="username"
                name="username"
                placeholder="Enter Your Username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={Inputs.password}
              />

              <button className="btn-signup p-2" onClick={submit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className=" col-lg-4 column col-left d-lg-flex justify-content-center align-items-center  d-none">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

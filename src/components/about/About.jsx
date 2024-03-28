import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          Welcome to Task Manager, your ultimate solution for efficient task management.
          We understand the importance of staying organized and productive, which is why
            we've created a platform designed to streamline your workflow and enhance productivity.<br/>

          With Task Manager, you can easily prioritize tasks, set deadlines, and track progress—all
          in one convenient location. Say goodbye to scattered to-do lists and missed deadlines,
            and hello to a more organized and efficient way of managing your tasks.<br/>

          Our user-friendly interface and intuitive features make it easy to stay on top of your 
          tasks and projects. Whether you're a busy professional, a student juggling multiple 
          assignments, or simply someone looking to stay organized in their personal life, Task Manager is here to help.<br/>

          Join the thousands of users who have already experienced the benefits of Task Manager.
          Start maximizing your productivity and achieving your goals today!
        </p>
      </div>
    </div>
  );
};

export default About;

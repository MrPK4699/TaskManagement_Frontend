import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center flex-column text-center">
      <h1>
        Organize your <br /> work and life, finally.
      </h1>
      <p>
        Become focused, organized, and calm with <br />
        task Management app. The World's #1 task manager app.
      </p>
      <button className="home-btn p-2">Make Task List</button>
    </div>
  );
};

export default Home;

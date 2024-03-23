import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{task.description}</h5>
        <p className="card-text">Status: {task.status}</p>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Task;

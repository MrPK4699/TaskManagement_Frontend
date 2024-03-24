
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ display, update }) => {
  const [Inputs, setInputs] = useState({
    title: update.title,
    description: update.description,
  });
  console.log(update)
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    try {
      await axios.put(`https://taskmanagementbackend-production-9dd5.up.railway.app/api/tasks/${update._id}`, Inputs, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success("Task updated successfully");
      display("none");
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error("Error updating task");
    }
  };

  return (
    <div className="p-5  d-flex justify-content-center align-items-start flex-column update  ">
      <h3>Update Your Task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.title}
        name="title"
        onChange={change}
      />
      <textarea
        className="todo-inputs w-100 p-3"
        value={Inputs.description}
        name="description"
        onChange={change}
      />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => {
            display("none");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;

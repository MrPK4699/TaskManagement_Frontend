import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ display, update }) => {
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (update) {
      setInputs({
        title: update.title || "",
        description: update.description || "",
        completed: update.completed || false,
      });
    }
  }, [update]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    try {
      await axios.put(
        `https://taskmanagementbackend-production-9dd5.up.railway.app/api/tasks/${update._id}`,
        Inputs,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Task updated successfully");
      // setInputs({
      //   title: "",
      //   description: "",
      // });
      display("none");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task");
    }
  };

  return (
    <div className="p-5  d-flex justify-content-center align-items-start flex-column update  ">
      <h3>Update Your Task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        placeholder={update.title}
        name="title"
        value={Inputs.title}
        onChange={change}
      />
      
      <textarea
        className="todo-inputs w-100 p-3"
        placeholder={update.title}
        name="description"
        value={Inputs.description}
        onChange={change}
      />
    <label className="checkbox-label">
      <input
        type="checkbox"
        name="completed"
        checked={Inputs.completed}
        onChange={(e) =>
          setInputs({ ...Inputs, completed: e.target.checked })
        }
      />
      Completed
    </label>
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => {
            setInputs({});
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

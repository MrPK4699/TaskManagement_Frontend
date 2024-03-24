
import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

let toUpdateArray = [];


const Todo = () => {
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    userEmail: localStorage.getItem('email'),
  });
  const [Array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
  const update = (value) => {
    toUpdateArray = Array[value];
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://taskmanagementbackend-production-9dd5.up.railway.app/api/tasks', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setArray(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [Array]);

  const createTask = async () => {
    try {
      const response = await axios.post('https://taskmanagementbackend-production-9dd5.up.railway.app/api/tasks', Inputs, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setArray([...Array, response.data]);
      setInputs({ title: "", description: "", userEmail: localStorage.getItem('email') });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`https://taskmanagementbackend-production-9dd5.up.railway.app/api/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const updatedTasks = Array.filter(task => task._id !== taskId);
      setArray(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">
            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              name="title"
              value={Inputs.title}
              onChange={change}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="Description"
              name="description"
              className=" p-2 todo-inputs"
              value={Inputs.description}
              onChange={change}
            />
          </div>
          <div className=" w-50 w-100 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1" onClick={createTask}>
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row ">
              {Array &&
                Array.map((item, index) => (
                  <div
                    className="col-lg-3 col-11 mx-lg-5 mx-3 my-2"
                    key={index}
                  >
                    <TodoCards
                      title={item.title}
                      description={item.description}
                      id={item._id}
                      delid={deleteTask}
                      display={dis}
                      updateId={index}
                      toBeUpdate={update}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update " id="todo-update">
        <div className="container update">
          {/* Here should go your update component */}
          {/* <Update /> */}
          <Update display={dis} update={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default Todo;


import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

const URI= process.env.REACT_APP_API_URL;



const Todo = () => {
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    userEmail: localStorage.getItem('email'),
  });
  const [Array, setArray] = useState([]);

  const [toUpdateObj, setToUpdateObj]=useState({})

  const [ShouldFetch, setShouldFetch] =useState(true)

// console.log(Array)
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs)=>({ ...prevInputs, [name]: value }));
  };

  const showUpdatePanel = (value) => {
    if(value){
      document.getElementById("todo-update").style.display = 'block';
      document.getElementById("todo").style.display = 'none';
    }
    else{
      document.getElementById("todo-update").style.display = 'none';
      document.getElementById("todo").style.display = 'block';
    }
  };
  const update = async(value) => {
    setToUpdateObj(Array[value]);
    // console.log(toUpdateArray);
    showUpdatePanel(true);

  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${URI}api/tasks`, {
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
  }, [ShouldFetch]);

  const createTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URI}api/tasks`, Inputs, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success("Task added successfully");

      // setArray([...Array, response.data]);
      // setShouldFetch(!ShouldFetch);
      fnc4fetch();
      setInputs({ title: "", description: "", userEmail: localStorage.getItem('email') });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const fnc4fetch =async ()=>{
    setShouldFetch(()=> !ShouldFetch);
  }
  // const deleteTask = async (taskId) => {
  //   try {
  //     await axios.delete(`https://taskmanagementbackend-production-9dd5.up.railway.app/api/tasks/${taskId}`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`
  //       }
  //     });
  //     const updatedTasks = Array.filter(task => task._id !== taskId);
  //     setArray(updatedTasks);
  //   } catch (error) {
  //     console.error('Error deleting task:', error);
  //   }
  // };

  return (
    <>
      <div className="todo" id="todo">
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
                      // delid={deleteTask}
                      isCompleted={item.completed}
                      showUpdatePanel={showUpdatePanel}
                      updateId={index}
                      toBeUpdate={update}
                      fnc4fetch={fnc4fetch}
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
          <Update showUpdatePanel={showUpdatePanel} update={toUpdateObj} fnc4fetch={fnc4fetch}/>
        </div>
      </div>
    </>
  );
};

export default Todo;

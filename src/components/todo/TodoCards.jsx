
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import { toast } from "react-toastify";
import axios from "axios";
const URI= process.env.REACT_APP_API_URL;


const TodoCards = ({ title, description, id , isCompleted , showUpdatePanel, updateId, toBeUpdate, fnc4fetch}) => {
  const deleteTask = async () => {
    try {
      await axios.delete(`${URI}api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success("Task deleted successfully");
      fnc4fetch();
      // delid(id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="p-3 todo-card">
      <div>
        <h5><b>Title : </b>{title}</h5>
        <p><b>Status : </b> <span style={{color: isCompleted? 'green':'rgb(255, 132, 0)'}}> {isCompleted? 'Complete':'in-progress'} </span> </p>
        <p className="todo-card-p"><b>Description : </b>{description}</p>

      </div>
      <div className="d-flex justify-content-around ">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
          onClick={() => {
            // Add update functionality here if needed
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head  px-2 py-1 text-danger"
          onClick={deleteTask}
        >
          <AiFillDelete className="card-icons del"  style={{ color: 'red' }} /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;

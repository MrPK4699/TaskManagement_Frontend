import React, { useState, useEffect } from 'react';

const AllTasks = () => {
  const email=localStorage.getItem('email');
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const userEmail=localStorage.getItem('email');
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        // console.log(data)
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [tasks]);

  const createTask = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ title, description, userEmail})
      });
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTaskStatus = async (taskId, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ completed:status })
      });
      const updatedTask = await response.json();
      const updatedTasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>All Tasks</h2>
      <form onSubmit={(e) => { e.preventDefault(); createTask(); }}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description"></textarea>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.length!==0? tasks.map(task => (
          <li key={task._id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>Status: {task.completed? "Completed":"Ongoing"}</div>
            <button onClick={() => updateTaskStatus(task._id, !task.completed)}>Mark as {task.completed? "Ongoing":"Completed"}</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        )): <li>No tasks available</li>}
      </ul>
    </div>
  );
};

export default AllTasks;

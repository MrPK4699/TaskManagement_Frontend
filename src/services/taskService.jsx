// taskService.js

const baseUrl = 'http://localhost:5000/api/tasks';

export const createTask = async (newTaskData) => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newTaskData)
      });
      const data = await response.json();
      // Handle response
      console.log('New task created:', data);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  

export const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      // Handle response
      console.log('Fetched tasks:', data.tasks);
      return data.tasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  };
  

export const updateTask = async (taskId, updatedTaskData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(updatedTaskData)
      });
      const data = await response.json();
      // Handle response
      console.log('Updated task:', data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  

export const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      // Handle response
      console.log('Deleted task:', data);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

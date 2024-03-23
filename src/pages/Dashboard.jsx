// Dashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ userName }) => {
  return (
    <div className="container mt-5">
      <div className="mt-3">
        {/* <Link to="/user-details" className="btn btn-primary mr-3">User Details</Link> */}
        <Link to="/tasks" className="btn btn-primary">Get All Tasks</Link>
      </div>
    </div>
  );
};

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { fetchTasks } from '../services/taskService';

// const Dashboard = () => {
//   const [activeSection, setActiveSection] = useState('userDetails');
//   const [tasks, setTasks] = useState([]);

//   // useEffect(() => {
//   //   // Fetch tasks from backend API and update tasks state
//   //   const fetchTasks = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:5000/api/tasks', {
//   //         headers: {
//   //           Authorization: `Bearer ${localStorage.getItem('token')}`
//   //         }
//   //       });
//   //       const data = await response.json();
//   //       setTasks(data.tasks);
//   //     } catch (error) {
//   //       console.error('Error fetching tasks:', error);
//   //     }
//   //   };

//   //   fetchTasks();
//   // }, []);

//   useEffect(() => {
//     const fetchTasksData = async () => {
//       const fetchedTasks = await fetchTasks();
//       setTasks(fetchedTasks);
//     };

//     fetchTasksData();
//   }, []);

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="mt-3">
//         <Link
//           to="/user-details"
//           className={`btn btn-primary mr-3 ${activeSection === 'userDetails' ? 'active' : ''}`}
//           onClick={() => handleSectionChange('userDetails')}
//         >
//           User Details
//         </Link>
//         <Link
//           to="/tasks"
//           className={`btn btn-primary ${activeSection === 'tasks' ? 'active' : ''}`}
//           onClick={() => handleSectionChange('tasks')}
//         >
//           All Tasks
//         </Link>
//       </div>
//       <div className="mt-5">
//         {activeSection === 'userDetails' ? (
//           <div>
//             {/* Render user details component here */}
//             <h3>User Details</h3>
//             {/* Add user details content here */}
//           </div>
//         ) : (
//           <div>
//             {/* Render tasks component here */}
//             <h3>Tasks</h3>
//             <ul className="list-group">
//               {tasks.length > 0 ? (
//                 tasks.map(task => (
//                   <li key={task.id} className="list-group-item">
//                     <div>{task.title}</div>
//                     <div>Status: {task.status}</div>
//                     <button className="btn btn-sm btn-info mr-2">Edit</button>
//                     <button className="btn btn-sm btn-danger">Delete</button>
//                   </li>
//                 ))
//               ) : (
//                 <h4>No tasks available</h4>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

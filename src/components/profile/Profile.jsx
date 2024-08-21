
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { GrDocumentUpdate } from "react-icons/gr";
// import './Profile.css'

// const Profile = () => {
//   const [User, setUser] = useState({
//     username: "",
//     email: '',
//     age: '',
//     about: '',
//   });
//   const [Inputs, setInputs] = useState({
//     username: "",
//     email: '',
//     age: '',
//     about: '',
//   });
//   // console.log(update)
//   const change = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...Inputs, [name]: value });
//   };
  
//   const display = (value) => {
//     document.getElementById("todo-update").style.display = value;
//     if(value==='none'){
//       document.getElementById("todo").style.display = 'block';
//     }
//     else{
//       document.getElementById("todo").style.display = 'none';
//     }
//   };

//   const updateProfile = async () => {
//     try {
//       await axios.put(`https://taskmanagementbackend-production-9dd5.up.railway.app/api/auth/profile/`, User, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       toast.success("Task updated successfully");
//       setInputs({});
//       // display("none");
//     } catch (error) {
//       console.error('Error updating task:', error);
//       toast.error("Error updating task");
//     }
//   };

//   useEffect(()=>{

//     const fetchData = async()=>{
//         try{
//             const res = await axios.get(`https://taskmanagementbackend-production-9dd5.up.railway.app/api/auth/profile`, {
//             headers: {
//               'Content-Type': 'application/json',
//               Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//           });
//             // work to be done  like filling the user details in (Inputs)
//             console.log(res.data);
//             setInputs({...res.data});
//             setUser(Inputs);
//         }
//         catch(error){
//             console.log(error);
//         }
//     }

//     fetchData();
//   },[User]) // ptani kya hoga function dependencies me daal skte h ya nhi

//   return (
//     <>

//       <div className="todo" id="todo">
//         {/* <ToastContainer /> */}
//         <div className="todo-body">
//           <div className="container-fluid">
//             <div className="row ">
//               <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2">
//                 <p>{User.username}</p>
//                 <p>{User.email}</p>
//                 <p>{User.age}</p>
//                 <p>{User.about}</p>
//                 </div>
//                 <div className="d-flex justify-content-around ">
//                   <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
//                     onClick={() => {
//                       // Add update functionality here if needed
//                       display("block");
//                     }}
//                   >
//                     <GrDocumentUpdate className="card-icons" /> Update
//                   </div>
        
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="todo-update " id="todo-update">
//         <div className="container update">
//           <div className="p-5  d-flex justify-content-center align-items-start flex-column update  ">
//             <h3>Update Your Profile</h3>
//             <input
//               type="text"
//               className="todo-inputs my-3 w-100 p-2"
//               value={Inputs.username}
//               // placeholder={}
//               name="name"
//               onChange={change}
//             />
//             <input
//               type="number"
//               className="todo-inputs my-3 w-100 p-2"
//               value={Inputs.age}
//               name="age"
//               onChange={change}
//             />
//             <input
//               type="email"
//               className="todo-inputs my-3 w-100 p-2"
//               value={Inputs.email}
//               name="email"
//               onChange={change}
//             />
//             <textarea
//               className="todo-inputs my-3 w-100 p-3"
//               value={Inputs.about}
//               name="about"
//               onChange={change}
//             />
//             <div>
//               <button className="btn btn-dark my-4" onClick={updateProfile}>
//                 UPDATE
//               </button>
//               <button
//                 className="btn btn-danger my-4 mx-3"
//                 onClick={() => {
//                   display("none");
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//           </div>  
//         </div>
//       </div>

//     </>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { GrDocumentUpdate } from "react-icons/gr";
import './Profile.css'
const URI= process.env.REACT_APP_API_URL;


const Profile = () => {
  const [user, setUser] = useState({
    username: "",
    email: '',
    age: '',
    about: '',
  });

  const [editedUser, setEditedUser] = useState({
    username: "",
    email: '',
    age: '',
    about: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URI}api/auth/profile`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(res.data);
        setEditedUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  // console.log(editedUser)
  const change = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const updateProfile = async () => {
    try {
      await axios.put(`${URI}api/auth/profile/`, editedUser, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUser(editedUser);
      // console.log('kuch bhi')
      toast.success("Profile updated successfully");
      document.getElementById("todo-update").style.display = "none";
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <div className="todo">
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2">
                <p>  Name : <b>{user.username}</b> </p>
                <p> Age : <b>{user.age||'N/A'}</b> </p>
                <p> About : <b>{user.about}</b> </p>
              </div>
              <div className="d-flex justify-content-around ">
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
                  onClick={() => {
                    document.getElementById("todo-update").style.display = "block";
                  }}
                >
                  <GrDocumentUpdate className="card-icons" /> Update
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update" style={{ display: "none" }}>
        <div className="container update">
          <div className="p-5  d-flex justify-content-center align-items-start flex-column update  ">
            <h3>Update Your Profile</h3>

            <b>Name :- </b>
            <input
              type="text"
              className="todo-inputs my-3 w-100 p-2"
              value={editedUser.username}
              name="username"
              onChange={change}
            />

            <b>Age:- </b>
            <input
              type="number"
              className="todo-inputs my-3 w-100 p-2"
              value={editedUser.age}
              name="age"
              onChange={change}
            />

            <b>About : </b>
            <textarea
              className="todo-inputs my-3 w-100 p-3"
              value={editedUser.about}
              name="about"
              onChange={change}
            />
            <div>
              <button className="btn btn-dark my-4" onClick={updateProfile}>
                UPDATE
              </button>
              <button
                className="btn btn-danger my-4 mx-3"
                onClick={() => {
                  document.getElementById("todo-update").style.display = "none";
                  setEditedUser(user); // Reset edited user data to original
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

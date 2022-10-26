import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// function Login(){

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  
//   const history = useHistory();
//   useEffect(()=> {
//     if(localStorage.getItem('user-info')){
//       history.push("/add")
//     }
//   },[]) 

//   async function login()
//   {
//     console.warn(username, password);

//     let item = {username, password};

//     console.info(item)



//     let postData = async () => {
//       await axios.post("http://localhost:8080/auth/v1/login" ,{
//           username,
//           password
//       })
//     }

//     console.info(postData)

//         // postData = await postData.JSON(); 
//     localStorage.setItem("user-info", JSON.stringify(postData))
//     history.push("/add")

//     // let result = await fetch("http://localhost:8080/auth/v1/login",{
//     //   method: 'POST',
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     "Accept": "application/json"
//     //   },
//     //   body: JSON.stringify(item)
//     // });

//     // console.info(result)

//     // result = await result.JSON(); 
//     // localStorage.setItem("user-info", JSON.stringify(result))
//     // history.push("/add")
//   }

//     return(
//       <div >
//         <h1 className= "col-sm-4 offset-sm-4"> Login - Horizon Valuers </h1>
//         <br></br>
//           <div className= "col-sm-2 offset-sm-4">
//             <input type="text" 
//               placeholder="email" 
//               onChange={(e) => setUsername(e.target.value)}
//               value = {username}
//               className= "form-control">
//             </input>
//             <br/>
//             <input type= "password" 
//               placeholder="password" 
//               onChange={(e) => setPassword(e.target.value)}
//               value = {password}
//               className="form-control">
//             </input>
//             <br/>
//             <button className="btn btn-primary" onClick={login}>Login</button>
//           </div>            
//       </div>
//     )
// }




async function loginUser(credentials) {

  console.log(credentials)

  return fetch("http://localhost:8080/auth/v1/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json()) 
 }


export default function Login({ setToken }){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  

  return(
    <div >
      <h1 className= "col-sm-4 offset-sm-4"> Login - Horizon Valuers </h1>
      <br></br>
        <form onSubmit={handleSubmit}>
        <div className= "col-sm-2 offset-sm-4">
          <input type="text" 
            placeholder="email" 
            onChange={(e) => setUsername(e.target.value)}
            value = {username}
            className= "form-control">
          </input>
          <br/>
          <input type= "password" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            className="form-control">
          </input>
          <br/>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        </form>            
    </div>
  )
}
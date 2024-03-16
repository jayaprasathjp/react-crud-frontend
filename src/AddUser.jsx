import React, { useState } from 'react'

export default function AddUser(props) {
  const [currentUser,setCurrentUser]=useState({id:null,name:"",roll:""})
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setCurrentUser({...currentUser,[name]:value})
  }
  const handleSubmit=(e)=>{
e.preventDefault();
props.addUser(currentUser)
setCurrentUser({...currentUser,name:"",roll:""})
  }
  return (
    <div>
        <h2>ADD USER</h2>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter your name</label>
    <input type="text" name="name" onChange={handleChange} value={currentUser.name} className="form-control"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter your roll</label>
    <input type="text" name="roll" onChange={handleChange} value={currentUser.roll}  className="form-control" />
  </div>
  
  <button type="submit" className="btn btn-primary">Add user</button>

</form>
    </div>
  )
}

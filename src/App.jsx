import { useState } from "react";
import "./App.css";
import AddUser from "./AddUser.jsx";
import Table from "./Table.jsx";

function App() {
  const [user, setUser] = useState([{ id: 1, name: "jp", roll: "admin" }]);
  const [id,setId]=useState(1)
  const addUser=(addingUser)=>{
    addingUser.id=id+1;
    setId(addingUser.id)
    setUser([...user,addingUser])
  }
  const deleteUser=(id)=>{
    setUser(user.filter((users)=> users.id!==id))
  }
  const editUser=(users)=>{
    const updatedUser=user.map((obj)=>{
      if (obj.id===users.id) {
        return {...obj,name:users.name,roll:users.roll}
      }
      return obj;
    })
    setUser(updatedUser)
  }
  return (
    <div>
      <header>
        <h2>CRUD</h2>
      </header>
      <br />
      <div className="container">
        <div className="row ">
          <div className="col-5">
            <AddUser user={user} addUser={addUser}/>
          </div>
          <div className="col-7">
            <Table user={user} onDelete={deleteUser} editUser={editUser}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import EditUsers from "./EditUsers";

export default function Table(props) {
  const editUser = (user) => {
    props.editUser(user);
  };
  return (
    <div>
      <h3>LIST USER</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Roll</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              {user.name !== "" || user.roll !== "" ? (
                <>
                  <td>{user.name}</td>
                  <td>{user.roll}</td>
                </>
              ) : (
                <td colSpan={2}>No user</td>
              )}
              <td>
                <EditUsers User={user} handleEdit={editUser} />

                <button
                  type="button"
                  onClick={() => props.onDelete(user.id)}
                  className=" btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

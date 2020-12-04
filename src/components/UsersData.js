import React from "react";
import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";

const TableData = () => {
  const users = useSelector((state) => state.users.users);

  console.log(users);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <i className="fas fa-user friends"></i>
              <span className="ml-1">Users</span>
            </th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" id="all" name="all" />
            </th>
            <th>TYPE</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>TELEPHONE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td></td>
              <td>{user.type}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableData;

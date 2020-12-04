import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Table } from "react-bootstrap";
import roleType from "../utils/roleType";
import SwitchButton from "./SwitchButton";
import { updateUserStatus } from "../actionCreators/usersActions";

const TableData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [usersSelected, setUsersSelected] = useState(
    new Array(users.length).fill(false)
  );

  const handleChange = (user, active) => {
    dispatch(updateUserStatus({ user, active }));
  };

  const handleCheckbox = (e) => {
    const id = e.target.id;
    const tempArr = [...usersSelected];
    tempArr[id] = !tempArr[id];
    setUsersSelected(tempArr);
  };

  return (
    <>
      <Container className="my-3">
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
            {users.map((user, index) => {
              const { id, name, email, phone, type, active } = user;
              return (
                <tr key={user.id}>
                  <td>
                    <input
                      id={index}
                      type="checkbox"
                      onChange={handleCheckbox}
                      checked={usersSelected[index]}
                    />
                  </td>
                  <td>{roleType(type)}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <SwitchButton
                      checked={active}
                      id={id}
                      user={user}
                      handleChange={handleChange}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableData;

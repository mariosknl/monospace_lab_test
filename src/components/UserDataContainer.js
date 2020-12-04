import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../actionCreators/usersActions";
import UsersData from "./UsersData";

const UserDataContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading" || status === "idle") return <p>loading...</p>;
  return (
    <div>
      <UsersData />
    </div>
  );
};

export default UserDataContainer;

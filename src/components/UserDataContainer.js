import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../actionCreators/usersActions";
import UsersData from "./UsersData";
import { updateUser } from "../reducers/usersSlice";

const UserDataContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.users.status);
  const updateStatus = useSelector((state) => state.users.updateStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
    if (updateStatus === "succeeded") {
      dispatch(fetchUsers());
      dispatch(updateUser());
    }
  }, [dispatch, status, updateStatus]);
  console.log(updateStatus);
  // if (status === "loading" || status === "idle") return <p>loading...</p>;
  return (
    <div>
      <UsersData />
    </div>
  );
};

export default UserDataContainer;

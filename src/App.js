import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchTableData from "./actionCreators/usersActions";
import UsersData from "./components/UsersData";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const { usersData } = users;

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  return (
    <div>
      <UsersData users={usersData} />
    </div>
  );
}

export default App;

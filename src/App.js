import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import fetchUsers from "./actionCreators/usersActions";
import UserDataContainer from "./components/UserDataContainer";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <UserDataContainer />
    </div>
  );
}

export default App;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("table/data", async () => {
  const options = {
    method: "GET",
    url: "http://marios.users.challenge.dev.monospacelabs.com/users",
  };
  const response = await axios(options);
  return response.data;
});

export default fetchUsers;

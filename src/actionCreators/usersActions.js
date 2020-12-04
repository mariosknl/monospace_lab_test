import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("table/data", async () => {
  const options = {
    method: "GET",
    url: "http://marios.users.challenge.dev.monospacelabs.com/users",
  };
  const response = await axios(options);
  return response.data;
});

export const updateUserStatus = createAsyncThunk("", async (args, thunkApi) => {
  const { user, active } = args;
  const options = {
    data: { active: !active },
    method: "PUT",
    url: `http://marios.users.challenge.dev.monospacelabs.com/users/${user.id}`,
  };
  const response = await axios(options);
  return response.data;
});

import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "../actionCreators/usersActions";

const fetchUsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default fetchUsersSlice.reducer;

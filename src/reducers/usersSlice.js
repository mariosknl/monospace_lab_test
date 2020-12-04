import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers, updateUserStatus } from "../actionCreators/usersActions";

const fetchUsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    updateStatus: "idle",
  },
  reducers: {
    updateUser: (state) => {
      state.updateStatus = "idle";
    },
  },
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
    [updateUserStatus.pending]: (state) => {
      state.updateStatus = "loading";
    },
    [updateUserStatus.fulfilled]: (state, action) => {
      state.updateStatus = "succeeded";
      // state.users = action.payload;
    },
    [updateUserStatus.rejected]: (state, action) => {
      state.updateStatus = "failed";
      state.error = action.error.message;
    },
  },
});

export const { updateUser } = fetchUsersSlice.actions;
export default fetchUsersSlice.reducer;

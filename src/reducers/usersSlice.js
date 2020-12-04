import { createSlice } from "@reduxjs/toolkit";

import fetchTableData from "../actionCreators/usersActions";

const tableDataSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTableData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTableData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = [action.payload];
    },
    [fetchTableData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default tableDataSlice.reducer;

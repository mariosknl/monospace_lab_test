import { createSlice } from "@reduxjs/toolkit";

import fetchTableData from "../actionCreators/tableDataActions";

const tableDataSlice = createSlice({
  name: "tableData",
  initialState: {
    tableData: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTableData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTableData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.tableData = [action.payload];
    },
    [fetchTableData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default tableDataSlice.reducer;

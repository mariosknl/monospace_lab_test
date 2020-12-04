import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "../reducers/tableDataSlice";

export default configureStore({
  reducer: {
    tableData: tableDataReducer,
  },
});

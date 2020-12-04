import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTableData = createAsyncThunk("table/data", async () => {
  const options = {
    method: "GET",
    url: "http://marios.users.challenge.dev.monospacelabs.com/",
  };
  const response = await axios(options);
  return response.data;
});

export default fetchTableData;

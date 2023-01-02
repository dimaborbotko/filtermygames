import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
});

export default requestsSlice.reducer;

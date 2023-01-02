import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./requestsReducer/RequestsSlice";

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
});

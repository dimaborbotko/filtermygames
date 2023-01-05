import { configureStore } from "@reduxjs/toolkit";
import steamReducer from "./requestsReducer/steamSlice";
import fakeReducer from "./fakeReducer/FakeSlice";

export default configureStore({
  reducer: {
    requests: steamReducer,
    fake: fakeReducer,
  },
});

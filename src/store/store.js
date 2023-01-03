import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./requestsReducer/RequestsSlice";
import fakeReducer from "./fakeReducer/FakeSlice";

export default configureStore({
  reducer: {
    requests: requestsReducer,
    fake: fakeReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import ownerReducer from "./ownerSlice";

const store = configureStore({
  reducer: {
    owner: ownerReducer,
  },
});

export default store;

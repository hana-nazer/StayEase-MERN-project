import { configureStore } from "@reduxjs/toolkit";
import ownerReducer from "./ownerSlice";
import verifyResortReducer from "./resortSlice";

const store = configureStore({
  reducer: {
    owner: ownerReducer,
    verifyResort: verifyResortReducer,
  },
});
export default store;

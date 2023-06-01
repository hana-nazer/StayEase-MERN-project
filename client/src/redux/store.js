import { configureStore } from "@reduxjs/toolkit";
import ownerReducer from "./ownerSlice";
import verifyResortReducer from "./resortSlice";
import locationReducer from './locationSlice'

const store = configureStore({
  reducer: {
    owner: ownerReducer,
    verifyResort: verifyResortReducer,
    location : locationReducer
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import ownerReducer from "./ownerSlice";
import verifyResortReducer from "./resortSlice";
import locationReducer from './locationSlice'
import getUserReducer from './getUserSlice'
import bookingReducer from './BookingSlice'

const store = configureStore({
  reducer: {
    owner: ownerReducer,
    verifyResort: verifyResortReducer,
    location : locationReducer,
    getUser:getUserReducer,
    booking:bookingReducer
  },
});
export default store;

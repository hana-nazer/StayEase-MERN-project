import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import ownerReducer from "./ownerSlice";
import verifyResortReducer from "./resortSlice";
import locationReducer from "./locationSlice";
import getUserReducer from "./getUserSlice";
import bookingReducer from "./BookingSlice";
import categoryReducer from "./categorySlice";
import resortCardReducer from './ResortCardSlice'
import userBookingdReducer from './userBookingSlice'

const store = configureStore({
  reducer: {
    owner: ownerReducer,
    verifyResort: verifyResortReducer,
    location: locationReducer,
    getUser: getUserReducer,
    booking: bookingReducer,
    category: categoryReducer,
    resort:resortCardReducer,
    userBookings : userBookingdReducer
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production" ? composeWithDevTools() : false,
});

export default store;

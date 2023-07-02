import { createSlice } from "@reduxjs/toolkit";
const initailBookingState = {
  bookings: [],
};
const userBookingSlice = createSlice({
  name: "userBookings",
  initialState: initailBookingState,
  reducers: {
    bookingInfo: (state, action) => {
      state.bookings = action.payload;
    },
  },
});

export const { bookingInfo } = userBookingSlice.actions;
export default userBookingSlice.reducer;

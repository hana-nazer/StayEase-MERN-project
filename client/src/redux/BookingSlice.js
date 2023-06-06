import { createSlice } from "@reduxjs/toolkit";
const initailBookingState = {
  bookingData: null,
};
const bookingSlice = createSlice({
  name: "booking",
  initialState: initailBookingState,
  reducers: {
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
    clearBookingData: (state) => {
      state.bookingData = null;
    },
  },
});
export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialLocation = {
  location: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialLocation,
  reducers: {
    setLocation: (state, action) => {
      state.location = [...action.payload];
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;

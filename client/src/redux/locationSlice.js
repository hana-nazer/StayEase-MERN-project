import { createSlice } from "@reduxjs/toolkit";

const initialLocation = {
  location: [],
  searchLocation :""
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialLocation,
  reducers: {
    setLocation: (state, action) => {
      state.location = [...action.payload];
    },
    searchLocation:(state,action)=>{
      state.searchLocation = action.payload
    },
    clearLocation:(state)=>{
      state.searchLocation = null
    }
  },
});

export const { setLocation,searchLocation ,clearLocation} = locationSlice.actions;
export default locationSlice.reducer;

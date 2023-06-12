// categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [], // Ensure the property name is "categories"
};
const categorySlice = createSlice({
  name: "category",
  initialState:initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = [...action.payload] 
      return state;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

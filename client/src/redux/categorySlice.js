// categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [], 
  selectedCategory: "",
};
const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = [...action.payload];
      return state;
    },
    chooseCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory, chooseCategory } = categorySlice.actions;
export default categorySlice.reducer;

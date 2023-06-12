import { createSlice } from "@reduxjs/toolkit";

const initialCategory = {
  category: [],
  
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategory,
  reducers: {
    setCategory: (state, action) => {
      state.category = [...action.payload];
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

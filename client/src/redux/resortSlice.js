import { createSlice } from "@reduxjs/toolkit";

const initialResortState = {
  actionSelected: null,
  resortData: null,
  ownerData: null,
};

const resortSlice = createSlice({
  name: "resortVerification",
  initialState: initialResortState,
  reducers: {
    setActionSelected: (state, action) => {
      state.actionSelected = action.payload;
    },
    setResortData: (state, action) => {
      state.resortData = action.payload;
    },
    setOwnerData: (state, action) => {
      state.ownerData = action.payload;
    },
  },
});

export const { setActionSelected, setResortData, setOwnerData } =
  resortSlice.actions;
export default resortSlice.reducer;

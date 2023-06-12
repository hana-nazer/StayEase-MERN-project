// import { createSlice } from "@reduxjs/toolkit";

// const initialResortState = {
//   resorts: [],
// };

// const resortCardSlice = createSlice({
//   name: "resortCard",
//   initialState:initialResortState,
//   reducers: {
//     setResortData: (state, action) => {
//       state.resorts = action.payload;
//     },
//   },
// });

// export const { setResortData } = resortCardSlice.actions;

// export default resortCardSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialResortState = {
  resorts: [],
};

const resortCardSlice = createSlice({
  name: "resortCard",
  initialState: initialResortState,
  reducers: {
    setResortData: (state, action) => {
      state.resorts = action.payload;
    },
  },
});

export const { setResortData } = resortCardSlice.actions;

export default resortCardSlice.reducer;


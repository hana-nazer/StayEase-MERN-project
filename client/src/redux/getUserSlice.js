import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  getUser: null,
};

const getUserSlice = createSlice({
  name: "get-current-user",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.getUser = action.payload;
    },
  },
});

export const { setUser } = getUserSlice.actions;
export default getUserSlice.reducer;

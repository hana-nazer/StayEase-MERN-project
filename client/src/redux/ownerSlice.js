import { createSlice } from "@reduxjs/toolkit";

const initialOwnerState = {
  owner_token : null
};
const ownerSlice = createSlice({
  name: "owner",
  initialState: initialOwnerState,
  reducers: {
    login(state,action) {
      state.owner_token = action.payload
    },
    logout(state) {
      state.owner_token = null
    },
  },
});

export const ownerActions = ownerSlice.actions;
export default ownerSlice.reducer;

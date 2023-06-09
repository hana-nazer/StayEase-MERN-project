import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  getUser: null,
  getOwner: null,
  getAdmin: null,
};

const getUserSlice = createSlice({
  name: "getCurrentUser",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.getUser = action.payload;
    },
    clearUser:(state)=>{state.getUser=null},
    setOwner: (state, action) => {
      state.getOwner = action.payload;
    },
    setAdmin: (state, action) => {
      state.getAdmin = action.payload;
    },
  },
});

export const { setUser, setOwner, setAdmin,clearUser } = getUserSlice.actions;
export default getUserSlice.reducer;

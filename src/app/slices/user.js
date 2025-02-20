import { createSlice } from "@reduxjs/toolkit";
import admin from "./admin";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    isAdmin: false,
  },

  reducers: {
    setUser: (state, action) => {
      const newUser = action.payload;
      if (newUser) {
        state.user = newUser;
        state.isLoggedIn = true;
        state.isAdmin = newUser.role === "admin";
      } else {
        state.user = null;
        state.isLoggedIn = false;
        state.isAdmin = false;
      }
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

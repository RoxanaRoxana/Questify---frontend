import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  loginUser,
  logoutUser,
  registerUser,
} from "../../services/api";

const initialAccessToken = localStorage.getItem("accessToken");
const initialRefreshToken = localStorage.getItem("refreshToken");

const initialState = {
  accessToken: initialAccessToken,
  refreshToken: initialRefreshToken,
  loading: false,
  isLoggedIn: false,
  userData: {},
  allUsers: [],
  error: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      const { users } = action.payload;
      let usersEmails = [];
      for (let user of users) {
        usersEmails.push(user.email);
      }
      state.allUsers = usersEmails;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      const { accessToken, refreshToken, sid, userData } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.userData = userData;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [logoutUser.pending]: (state) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.userData = {};
    },
    [logoutUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;

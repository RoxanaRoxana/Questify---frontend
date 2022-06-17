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
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state) => {
      state.loading = false;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      const { accessToken, refreshToken, sid, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.userData = user;
      state.loading = false;
      state.isLoggedIn = true;
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
  },
});

export default usersSlice.reducer;

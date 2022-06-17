import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://questify-backend-pl-on-2.herokuapp.com/api/";

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (accessToken) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    try {
      const { data } = await axios.get(`${apiURL}/users`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const registerUser = createAsyncThunk("users/register", async (user) => {
  try {
    const { data } = await axios.post(`${apiURL}/users/register`, {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const loginUser = createAsyncThunk("users/login", async (user) => {
  try {
    const { data } = await axios.post(`${apiURL}/users/login`, {
      email: user.email,
      password: user.password,
    });
    return data;
  } catch (error) {
    return error?.response;
  }
});

export const logoutUser = createAsyncThunk(
  "users/logout",
  async (accessToken) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    try {
      const { data } = await axios.post(`${apiURL}/users/logout`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const getAllCards = createAsyncThunk(
  "getAllCards",
  async (accessToken) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    try {
      const { data } = await axios.get(`${apiURL}/card`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const createCard = createAsyncThunk(
  "createCard",
  async ({ accessToken, cardData }) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    try {
      const { data } = await axios.post(`${apiURL}/card`, {
        title: cardData.title,
        difficulty: cardData.difficulty,
        category: cardData.category,
        date: cardData.date,
        time: cardData.time,
        type: cardData.type,
      });
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const deleteCard = createAsyncThunk(
  "deleteCard",
  async ({ accessToken, cardId }) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    await axios.delete(`${apiURL}/card/${cardId}`);
    try {
      const { data } = await axios.get(`${apiURL}/card`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

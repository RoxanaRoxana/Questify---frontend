import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://questify-backend-pl-on-2.herokuapp.com/api/";

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  const { data } = await axios.get(`${apiURL}/users`);
  return data;
});

export const registerUser = createAsyncThunk("users/register", async (user) => {
  const { data } = await axios.post(`${apiURL}/users/register`, {
    email: user.email,
    password: user.password,
  });
  return data;
});

export const loginUser = createAsyncThunk("users/login", async (user) => {
  const { data } = await axios.post(`${apiURL}/users/login`, {
    email: user.email,
    password: user.password,
  });
  return data;
});

export const logoutUser = createAsyncThunk(
  "users/logout",
  async (accessToken) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const { data } = await axios.post(`${apiURL}/users/logout`);
    return data;
  }
);

export const getAllCards = createAsyncThunk(
  "getAllCards",
  async (accessToken) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const { data } = await axios.get(`${apiURL}/card`);
    return data;
  }
);

export const createCard = createAsyncThunk(
  "createCard",
  async ({ accessToken, cardData }) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const { data } = await axios.post(`${apiURL}/card`, {
      title: cardData.title,
      difficulty: cardData.difficulty,
      category: cardData.category,
      date: cardData.date,
      time: cardData.time,
      type: cardData.type,
    });
    return data;
  }
);

export const deleteCard = createAsyncThunk(
  "deleteCard",
  async ({ accessToken, cardId }) => {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
    await axios.delete(`${apiURL}/card/${cardId}`);
    const { data } = await axios.get(`${apiURL}/card`);
    return data;
  }
);

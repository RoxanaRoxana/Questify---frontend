import { createSlice } from "@reduxjs/toolkit";
import {
  createCard,
  deleteCard,
  editCard,
  getAllCards,
} from "../../services/api";

const initialState = {
  loading: false,
  cardsList: null,
  error: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  extraReducers: {
    [getAllCards.pending]: (state) => {
      state.loading = true;
    },
    [getAllCards.fulfilled]: (state, action) => {
      state.cardsList = action.payload;
      state.loading = false;
    },
    [getAllCards.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [createCard.pending]: (state) => {
      state.loading = true;
    },
    [createCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.cardsList.cards.push(action.payload.createdCard);
    },
    [createCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [editCard.pending]: (state) => {
      state.loading = true;
    },
    [editCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.cardsList.cards = [action.payload.editedCard];
    },
    [editCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteCard.pending]: (state) => {
      state.loading = true;
    },
    [deleteCard.fulfilled]: (state, action) => {
      state.cardsList = action.payload;
    },
    [deleteCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default cardsSlice.reducer;
